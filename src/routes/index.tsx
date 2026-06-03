import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Navbar } from "@/components/organizer/Navbar";
import { Hero } from "@/components/organizer/Hero";
import { OrganizerPanel } from "@/components/organizer/OrganizerPanel";
import { Analytics } from "@/components/organizer/Analytics";
import { Features } from "@/components/organizer/Features";
import { About, Footer } from "@/components/organizer/About";
export type OrganizeState = {

  folderPath: string;

  counts: {

    Images: number;

    PDFs: number;

    Videos: number;

    Music: number;

    Python: number;

    Others: number;

  };

  total: number;

  logs: string[];

  progress: number;

  running: boolean;

};
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart File Organizer Pro — Python-powered file automation" },
      {
        name: "description",
        content:
          "Automate file management with intelligent Python-powered organization. Sort, dedupe, and categorize files into clean folders in seconds.",
      },
      { property: "og:title", content: "Smart File Organizer Pro" },
      {
        property: "og:description",
        content: "Automate file management with intelligent Python-powered organization.",
      },
    ],
  }),
  component: Index,
});

const initial: OrganizeState = {
  folderPath: "",
  counts: { Images: 0, PDFs: 0, Videos: 0, Music: 0, Python: 0, Others: 0 },
  total: 0,
  logs: [],
  progress: 0,
  running: false,
};

function Index() {
  const [state, setState] = useState<OrganizeState>(initial);
  const onChange = useCallback((s: OrganizeState) => setState(s), []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <OrganizerPanel onChange={onChange} />
      <Features />
      <Analytics state={state} />
      <About />
      <Footer />
    </main>
  );
}
