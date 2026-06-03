import { SectionHeading } from "./Analytics";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading eyebrow="About" title="Modern Python-Powered File Automation" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
  {
    k: "Python Automation",

    v:
      "Automatically organizes files into categorized folders like Images, PDFs, Videos, Music, and more using intelligent automation logic.",
  },

  {
    k: "Modern Dashboard",

    v:
      "Interactive analytics dashboard with activity logs, file statistics, and responsive modern UI design.",
  },

  {
    k: "Local Processing",

    v:
      "All file organization operations happen locally on your machine for fast and secure performance.",
  },
        ].map((b) => (
          <div key={b.k} className="glass p-6">
            <div className="text-lg font-semibold text-emerald-400">
  {b.k}
</div>
            <p className="mt-3 text-sm text-muted-foreground">{b.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-6 text-sm text-muted-foreground">
        © 2026 Smart File Organizer Pro 
      </div>
    </footer>
  );
}
