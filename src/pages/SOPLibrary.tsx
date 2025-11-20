import { ArrowLeft, Search, FileText, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SOPLibrary = () => {
  const navigate = useNavigate();

  const departments = [
    { name: "All Departments", count: 142, active: true },
    { name: "Public Safety (Police/Fire)", count: 45, active: false },
    { name: "Public Works", count: 32, active: false },
    { name: "Administration / HR", count: 28, active: false },
    { name: "IT & Cyber", count: 12, active: false },
  ];

  const documentTypes = [
    { name: "PDF Policies", count: 89, icon: FileText },
    { name: "Word Templates", count: 53, icon: FileText },
  ];

  const documents = [
    {
      type: "PDF",
      title: "Severe Weather Response Protocol (2025)",
      city: "City of Springfield",
      uploader: "Sarah Martinez",
      uploadDate: "2 days ago",
      description: "Updated guidelines for activating the EOC during blizzards and flash floods. Includes new communication hierarchy.",
      tags: ["Safety", "Emergency"],
      downloads: 124,
    },
    {
      type: "DOC",
      title: "Social Media Employee Conduct Policy",
      city: "City of Lincoln",
      uploader: "Mark Johnson",
      uploadDate: "1 week ago",
      description: "Editable Word template defining acceptable use of personal social media for city employees. HR approved.",
      tags: ["HR", "Legal", "Template"],
      downloads: 1115,
    },
    {
      type: "DOC",
      title: "RFP Template for Road Maintenance",
      city: "City of Madison",
      uploader: "Public Works Dept",
      uploadDate: "3 weeks ago",
      description: "Standard Request for Proposal document for contracting annual road resurfacing. Includes compliance checklists.",
      tags: ["Procurement", "Public Works"],
      downloads: 142,
    },
    {
      type: "PDF",
      title: "Cybersecurity Incident Response Plan",
      city: "City of Austin",
      uploader: "IT Director",
      uploadDate: "1 month ago",
      description: "Detailed steps for mitigating ransomware attacks and data breaches. Aligns with NIST framework.",
      tags: ["IT", "Security"],
      downloads: 189,
    },
    {
      type: "DOC",
      title: "Fleet Vehicle Inspection Checklist",
      city: "City of Riverside",
      uploader: "Fleet Manager",
      uploadDate: "2 months ago",
      description: "Daily and weekly inspection forms for heavy machinery and patrol vehicles.",
      tags: ["Operations", "Maintenance"],
      downloads: 156,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-foreground">SOP Library</h1>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border bg-sidebar min-h-[calc(100vh-73px)] sticky top-[73px]">
          <div className="p-6 space-y-6">
            {/* Departments */}
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Departments
              </h2>
              <div className="space-y-1">
                {departments.map((dept) => (
                  <button
                    key={dept.name}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      dept.active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{dept.name}</span>
                    <span className="text-xs text-muted-foreground">{dept.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Document Type */}
            <div>
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Document Type
              </h2>
              <div className="space-y-1">
                {documentTypes.map((type) => (
                  <button
                    key={type.name}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <type.icon className="h-4 w-4" />
                      <span>{type.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{type.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-1">SOP Library</h1>
                  <p className="text-sm text-muted-foreground">
                    Browse, download, and adapt policies from verified cities.
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share SOP
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 mt-4">
                <Tabs defaultValue="regional" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="regional">Regional Library</TabsTrigger>
                    <TabsTrigger value="mycity">My City's Docs</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Search */}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for 'Social Media Policy', 'Snow Removal', 'Hiring'..."
                  className="pl-10 bg-muted/50 border-border"
                />
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        variant={doc.type === "PDF" ? "destructive" : "default"}
                        className="font-semibold"
                      >
                        {doc.type}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        ✓ {doc.city}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-foreground mb-2 leading-tight">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-muted-foreground mb-3">
                      Uploaded by {doc.uploader} • {doc.uploadDate}
                    </p>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {doc.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {doc.downloads.toLocaleString()} downloads
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SOPLibrary;
