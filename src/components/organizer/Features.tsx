import {
  FolderPlus,
  Brain,
  Activity,
  BarChart3,
} from "lucide-react";

import { SectionHeading } from "./Analytics";

const FEATURES = [
  {
    icon: FolderPlus,

    title: "Smart File Organization",

    desc:
      "Automatically organizes files into categorized folders like Images, PDFs, Videos, Music, and more.",

    color: "from-emerald-500 to-teal-500",
  },

  {
    icon: Brain,

    title: "Smart Categorization",

    desc:
      "Uses file extensions to intelligently detect and organize files with minimal user interaction.",

    color: "from-indigo-500 to-violet-500",
  },

  {
    icon: Activity,

    title: "Activity Logs",

    desc:
      "Tracks file organization activity and displays real-time processing updates.",

    color: "from-amber-500 to-orange-500",
  },

  {
    icon: BarChart3,

    title: "Analytics Dashboard",

    desc:
      "Visualize categorized file statistics using modern charts and insights.",

    color: "from-rose-500 to-pink-500",
  },
];

export function Features() {

  return (

    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-16"
    >

      <SectionHeading
        eyebrow="Features"
        title="Smart Automation Features"
        subtitle="Modern Python-powered tools for intelligent file organization, analytics, and activity tracking."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {FEATURES.map((f) => (

          <div
            key={f.title}
            className="glass group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]"
          >

            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} shadow-lg transition-transform group-hover:scale-110`}
            >

              <f.icon className="h-6 w-6 text-white" />

            </div>

            <h3 className="text-lg font-semibold !text-emerald-400">

              {f.title}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              {f.desc}

            </p>

            <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          </div>

        ))}

      </div>

    </section>

  );

}