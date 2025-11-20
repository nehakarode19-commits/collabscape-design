--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: channel_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.channel_members (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    channel_id uuid,
    user_id uuid,
    role text DEFAULT 'member'::text,
    is_muted boolean DEFAULT false,
    joined_at timestamp with time zone DEFAULT now()
);


--
-- Name: channels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.channels (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    is_private boolean DEFAULT false,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: conversation_participants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conversation_participants (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    conversation_id uuid,
    user_id uuid,
    is_muted boolean DEFAULT false,
    joined_at timestamp with time zone DEFAULT now()
);


--
-- Name: conversations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conversations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    is_group boolean DEFAULT false,
    name text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: message_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message_attachments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    message_id uuid,
    file_url text NOT NULL,
    file_name text NOT NULL,
    file_type text NOT NULL,
    file_size integer,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: message_reactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message_reactions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    message_id uuid,
    user_id uuid,
    emoji text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    content text NOT NULL,
    sender_id uuid,
    channel_id uuid,
    topic_id uuid,
    conversation_id uuid,
    parent_message_id uuid,
    is_edited boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT message_destination_check CHECK ((((channel_id IS NOT NULL) AND (conversation_id IS NULL)) OR ((conversation_id IS NOT NULL) AND (channel_id IS NULL))))
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    full_name text,
    avatar_url text,
    status text DEFAULT 'offline'::text,
    custom_status text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: topics; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.topics (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    channel_id uuid,
    title text NOT NULL,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: typing_indicators; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.typing_indicators (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    channel_id uuid,
    conversation_id uuid,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: channel_members channel_members_channel_id_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channel_members
    ADD CONSTRAINT channel_members_channel_id_user_id_key UNIQUE (channel_id, user_id);


--
-- Name: channel_members channel_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channel_members
    ADD CONSTRAINT channel_members_pkey PRIMARY KEY (id);


--
-- Name: channels channels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_pkey PRIMARY KEY (id);


--
-- Name: conversation_participants conversation_participants_conversation_id_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversation_participants
    ADD CONSTRAINT conversation_participants_conversation_id_user_id_key UNIQUE (conversation_id, user_id);


--
-- Name: conversation_participants conversation_participants_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversation_participants
    ADD CONSTRAINT conversation_participants_pkey PRIMARY KEY (id);


--
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (id);


--
-- Name: message_attachments message_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_attachments
    ADD CONSTRAINT message_attachments_pkey PRIMARY KEY (id);


--
-- Name: message_reactions message_reactions_message_id_user_id_emoji_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_message_id_user_id_emoji_key UNIQUE (message_id, user_id, emoji);


--
-- Name: message_reactions message_reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: topics topics_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_pkey PRIMARY KEY (id);


--
-- Name: typing_indicators typing_indicators_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.typing_indicators
    ADD CONSTRAINT typing_indicators_pkey PRIMARY KEY (id);


--
-- Name: idx_channel_members_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_channel_members_user ON public.channel_members USING btree (user_id);


--
-- Name: idx_conversation_participants_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_conversation_participants_user ON public.conversation_participants USING btree (user_id);


--
-- Name: idx_messages_channel; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_messages_channel ON public.messages USING btree (channel_id);


--
-- Name: idx_messages_conversation; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_messages_conversation ON public.messages USING btree (conversation_id);


--
-- Name: idx_messages_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_messages_created_at ON public.messages USING btree (created_at DESC);


--
-- Name: idx_messages_topic; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_messages_topic ON public.messages USING btree (topic_id);


--
-- Name: channels update_channels_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_channels_updated_at BEFORE UPDATE ON public.channels FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: conversations update_conversations_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON public.conversations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: messages update_messages_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_messages_updated_at BEFORE UPDATE ON public.messages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: profiles update_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: topics update_topics_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_topics_updated_at BEFORE UPDATE ON public.topics FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: channel_members channel_members_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channel_members
    ADD CONSTRAINT channel_members_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id) ON DELETE CASCADE;


--
-- Name: channel_members channel_members_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channel_members
    ADD CONSTRAINT channel_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: channels channels_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);


--
-- Name: conversation_participants conversation_participants_conversation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversation_participants
    ADD CONSTRAINT conversation_participants_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;


--
-- Name: conversation_participants conversation_participants_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conversation_participants
    ADD CONSTRAINT conversation_participants_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: message_attachments message_attachments_message_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_attachments
    ADD CONSTRAINT message_attachments_message_id_fkey FOREIGN KEY (message_id) REFERENCES public.messages(id) ON DELETE CASCADE;


--
-- Name: message_reactions message_reactions_message_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_message_id_fkey FOREIGN KEY (message_id) REFERENCES public.messages(id) ON DELETE CASCADE;


--
-- Name: message_reactions message_reactions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: messages messages_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id) ON DELETE CASCADE;


--
-- Name: messages messages_conversation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;


--
-- Name: messages messages_parent_message_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_parent_message_id_fkey FOREIGN KEY (parent_message_id) REFERENCES public.messages(id) ON DELETE SET NULL;


--
-- Name: messages messages_sender_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES auth.users(id);


--
-- Name: messages messages_topic_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_topic_id_fkey FOREIGN KEY (topic_id) REFERENCES public.topics(id) ON DELETE CASCADE;


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: topics topics_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id) ON DELETE CASCADE;


--
-- Name: topics topics_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);


--
-- Name: typing_indicators typing_indicators_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.typing_indicators
    ADD CONSTRAINT typing_indicators_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id) ON DELETE CASCADE;


--
-- Name: typing_indicators typing_indicators_conversation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.typing_indicators
    ADD CONSTRAINT typing_indicators_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;


--
-- Name: typing_indicators typing_indicators_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.typing_indicators
    ADD CONSTRAINT typing_indicators_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: channels Channel creators can update their channels; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Channel creators can update their channels" ON public.channels FOR UPDATE USING ((auth.uid() = created_by));


--
-- Name: topics Channel members can create topics; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Channel members can create topics" ON public.topics FOR INSERT WITH CHECK ((channel_id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid()))));


--
-- Name: channel_members Channel members can view their memberships; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Channel members can view their memberships" ON public.channel_members FOR SELECT USING (((user_id = auth.uid()) OR (channel_id IN ( SELECT channels.id
   FROM public.channels
  WHERE (NOT channels.is_private)))));


--
-- Name: profiles Profiles are viewable by everyone; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);


--
-- Name: channels Public channels are viewable by everyone; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public channels are viewable by everyone" ON public.channels FOR SELECT USING (((NOT is_private) OR (id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid())))));


--
-- Name: message_attachments Users can add attachments to their messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can add attachments to their messages" ON public.message_attachments FOR INSERT WITH CHECK ((message_id IN ( SELECT messages.id
   FROM public.messages
  WHERE (messages.sender_id = auth.uid()))));


--
-- Name: conversation_participants Users can add participants to their conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can add participants to their conversations" ON public.conversation_participants FOR INSERT WITH CHECK ((conversation_id IN ( SELECT conversation_participants_1.conversation_id
   FROM public.conversation_participants conversation_participants_1
  WHERE (conversation_participants_1.user_id = auth.uid()))));


--
-- Name: message_reactions Users can add reactions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can add reactions" ON public.message_reactions FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: channels Users can create channels; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create channels" ON public.channels FOR INSERT WITH CHECK ((auth.uid() = created_by));


--
-- Name: conversations Users can create conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create conversations" ON public.conversations FOR INSERT WITH CHECK (true);


--
-- Name: messages Users can delete their own messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete their own messages" ON public.messages FOR DELETE USING ((auth.uid() = sender_id));


--
-- Name: profiles Users can insert their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK ((auth.uid() = id));


--
-- Name: channel_members Users can join public channels; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can join public channels" ON public.channel_members FOR INSERT WITH CHECK (((user_id = auth.uid()) AND ( SELECT (NOT channels.is_private)
   FROM public.channels
  WHERE (channels.id = channel_members.channel_id))));


--
-- Name: message_reactions Users can remove their reactions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can remove their reactions" ON public.message_reactions FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: typing_indicators Users can remove their typing status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can remove their typing status" ON public.typing_indicators FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: messages Users can send messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can send messages" ON public.messages FOR INSERT WITH CHECK (((auth.uid() = sender_id) AND ((channel_id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid()))) OR (conversation_id IN ( SELECT conversation_participants.conversation_id
   FROM public.conversation_participants
  WHERE (conversation_participants.user_id = auth.uid()))))));


--
-- Name: typing_indicators Users can set their typing status; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can set their typing status" ON public.typing_indicators FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: messages Users can update their own messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own messages" ON public.messages FOR UPDATE USING ((auth.uid() = sender_id));


--
-- Name: profiles Users can update their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING ((auth.uid() = id));


--
-- Name: message_attachments Users can view attachments on visible messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view attachments on visible messages" ON public.message_attachments FOR SELECT USING ((message_id IN ( SELECT messages.id
   FROM public.messages)));


--
-- Name: conversation_participants Users can view conversation participants; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view conversation participants" ON public.conversation_participants FOR SELECT USING ((conversation_id IN ( SELECT conversation_participants_1.conversation_id
   FROM public.conversation_participants conversation_participants_1
  WHERE (conversation_participants_1.user_id = auth.uid()))));


--
-- Name: messages Users can view messages in their channels; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view messages in their channels" ON public.messages FOR SELECT USING (((channel_id IN ( SELECT channels.id
   FROM public.channels
  WHERE (NOT channels.is_private))) OR (channel_id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid()))) OR (conversation_id IN ( SELECT conversation_participants.conversation_id
   FROM public.conversation_participants
  WHERE (conversation_participants.user_id = auth.uid())))));


--
-- Name: message_reactions Users can view reactions on visible messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view reactions on visible messages" ON public.message_reactions FOR SELECT USING ((message_id IN ( SELECT messages.id
   FROM public.messages)));


--
-- Name: conversations Users can view their conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their conversations" ON public.conversations FOR SELECT USING ((id IN ( SELECT conversation_participants.conversation_id
   FROM public.conversation_participants
  WHERE (conversation_participants.user_id = auth.uid()))));


--
-- Name: topics Users can view topics in their channels; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view topics in their channels" ON public.topics FOR SELECT USING (((channel_id IN ( SELECT channels.id
   FROM public.channels
  WHERE (NOT channels.is_private))) OR (channel_id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid())))));


--
-- Name: typing_indicators Users can view typing in their channels/conversations; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view typing in their channels/conversations" ON public.typing_indicators FOR SELECT USING (((channel_id IN ( SELECT channel_members.channel_id
   FROM public.channel_members
  WHERE (channel_members.user_id = auth.uid()))) OR (conversation_id IN ( SELECT conversation_participants.conversation_id
   FROM public.conversation_participants
  WHERE (conversation_participants.user_id = auth.uid())))));


--
-- Name: channel_members; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.channel_members ENABLE ROW LEVEL SECURITY;

--
-- Name: channels; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;

--
-- Name: conversation_participants; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.conversation_participants ENABLE ROW LEVEL SECURITY;

--
-- Name: conversations; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

--
-- Name: message_attachments; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.message_attachments ENABLE ROW LEVEL SECURITY;

--
-- Name: message_reactions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.message_reactions ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: topics; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;

--
-- Name: typing_indicators; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.typing_indicators ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


