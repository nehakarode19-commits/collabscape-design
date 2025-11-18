-- Create user profiles table for additional user info
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  status TEXT DEFAULT 'offline',
  custom_status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone" 
ON public.profiles FOR SELECT 
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Create trigger for profile creation on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Channels/Streams table
CREATE TABLE public.channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  is_private BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;

-- Channel members table (create before policies that reference it)
CREATE TABLE public.channel_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id UUID REFERENCES public.channels(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member',
  is_muted BOOLEAN DEFAULT false,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(channel_id, user_id)
);

ALTER TABLE public.channel_members ENABLE ROW LEVEL SECURITY;

-- Now add channel policies that reference channel_members
CREATE POLICY "Public channels are viewable by everyone"
ON public.channels FOR SELECT
USING (NOT is_private OR id IN (
  SELECT channel_id FROM channel_members WHERE user_id = auth.uid()
));

CREATE POLICY "Users can create channels"
ON public.channels FOR INSERT
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Channel creators can update their channels"
ON public.channels FOR UPDATE
USING (auth.uid() = created_by);

-- Channel members policies
CREATE POLICY "Channel members can view their memberships"
ON public.channel_members FOR SELECT
USING (user_id = auth.uid() OR channel_id IN (
  SELECT id FROM channels WHERE NOT is_private
));

CREATE POLICY "Users can join public channels"
ON public.channel_members FOR INSERT
WITH CHECK (
  user_id = auth.uid() AND 
  (SELECT NOT is_private FROM channels WHERE id = channel_id)
);

-- Direct message conversations
CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  is_group BOOLEAN DEFAULT false,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

-- Conversation participants (create before policies that reference it)
CREATE TABLE public.conversation_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  is_muted BOOLEAN DEFAULT false,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(conversation_id, user_id)
);

ALTER TABLE public.conversation_participants ENABLE ROW LEVEL SECURITY;

-- Now add conversation policies
CREATE POLICY "Users can view their conversations"
ON public.conversations FOR SELECT
USING (id IN (
  SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()
));

CREATE POLICY "Users can create conversations"
ON public.conversations FOR INSERT
WITH CHECK (true);

-- Conversation participants policies
CREATE POLICY "Users can view conversation participants"
ON public.conversation_participants FOR SELECT
USING (conversation_id IN (
  SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()
));

CREATE POLICY "Users can add participants to their conversations"
ON public.conversation_participants FOR INSERT
WITH CHECK (conversation_id IN (
  SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()
));

-- Topics/Threads table
CREATE TABLE public.topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id UUID REFERENCES public.channels(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view topics in their channels"
ON public.topics FOR SELECT
USING (channel_id IN (
  SELECT id FROM channels WHERE NOT is_private
) OR channel_id IN (
  SELECT channel_id FROM channel_members WHERE user_id = auth.uid()
));

CREATE POLICY "Channel members can create topics"
ON public.topics FOR INSERT
WITH CHECK (
  channel_id IN (SELECT channel_id FROM channel_members WHERE user_id = auth.uid())
);

-- Messages table (for both channels and DMs)
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  sender_id UUID REFERENCES auth.users(id),
  channel_id UUID REFERENCES public.channels(id) ON DELETE CASCADE,
  topic_id UUID REFERENCES public.topics(id) ON DELETE CASCADE,
  conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
  parent_message_id UUID REFERENCES public.messages(id) ON DELETE SET NULL,
  is_edited BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT message_destination_check CHECK (
    (channel_id IS NOT NULL AND conversation_id IS NULL) OR
    (conversation_id IS NOT NULL AND channel_id IS NULL)
  )
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view messages in their channels"
ON public.messages FOR SELECT
USING (
  (channel_id IN (
    SELECT id FROM channels WHERE NOT is_private
  ) OR channel_id IN (
    SELECT channel_id FROM channel_members WHERE user_id = auth.uid()
  )) OR
  (conversation_id IN (
    SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()
  ))
);

CREATE POLICY "Users can send messages"
ON public.messages FOR INSERT
WITH CHECK (
  auth.uid() = sender_id AND (
    (channel_id IN (SELECT channel_id FROM channel_members WHERE user_id = auth.uid())) OR
    (conversation_id IN (SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()))
  )
);

CREATE POLICY "Users can update their own messages"
ON public.messages FOR UPDATE
USING (auth.uid() = sender_id);

CREATE POLICY "Users can delete their own messages"
ON public.messages FOR DELETE
USING (auth.uid() = sender_id);

-- Message reactions
CREATE TABLE public.message_reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id UUID REFERENCES public.messages(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  emoji TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(message_id, user_id, emoji)
);

ALTER TABLE public.message_reactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view reactions on visible messages"
ON public.message_reactions FOR SELECT
USING (message_id IN (SELECT id FROM messages));

CREATE POLICY "Users can add reactions"
ON public.message_reactions FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their reactions"
ON public.message_reactions FOR DELETE
USING (auth.uid() = user_id);

-- Message attachments
CREATE TABLE public.message_attachments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id UUID REFERENCES public.messages(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.message_attachments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view attachments on visible messages"
ON public.message_attachments FOR SELECT
USING (message_id IN (SELECT id FROM messages));

CREATE POLICY "Users can add attachments to their messages"
ON public.message_attachments FOR INSERT
WITH CHECK (message_id IN (SELECT id FROM messages WHERE sender_id = auth.uid()));

-- Typing indicators (temporary state)
CREATE TABLE public.typing_indicators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  channel_id UUID REFERENCES public.channels(id) ON DELETE CASCADE,
  conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.typing_indicators ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view typing in their channels/conversations"
ON public.typing_indicators FOR SELECT
USING (
  (channel_id IN (SELECT channel_id FROM channel_members WHERE user_id = auth.uid())) OR
  (conversation_id IN (SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()))
);

CREATE POLICY "Users can set their typing status"
ON public.typing_indicators FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their typing status"
ON public.typing_indicators FOR DELETE
USING (auth.uid() = user_id);

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.typing_indicators;
ALTER PUBLICATION supabase_realtime ADD TABLE public.message_reactions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;

-- Create indexes for performance
CREATE INDEX idx_messages_channel ON public.messages(channel_id);
CREATE INDEX idx_messages_conversation ON public.messages(conversation_id);
CREATE INDEX idx_messages_topic ON public.messages(topic_id);
CREATE INDEX idx_messages_created_at ON public.messages(created_at DESC);
CREATE INDEX idx_channel_members_user ON public.channel_members(user_id);
CREATE INDEX idx_conversation_participants_user ON public.conversation_participants(user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Add update triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_channels_updated_at BEFORE UPDATE ON public.channels
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON public.conversations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_topics_updated_at BEFORE UPDATE ON public.topics
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_messages_updated_at BEFORE UPDATE ON public.messages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();