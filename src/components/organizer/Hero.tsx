import { Sparkles, Zap } from "lucide-react";
export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 md:pt-24">
<div className="flex flex-col items-center text-center">     
    <div className="flex flex-col items-center">
          
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Smart File</span>
            <br />
            Organizer Pro
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Automate file management with intelligent Python-powered organization.
            Sort thousands of files into clean, categorized folders in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#organize" className="btn-neon inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
              <Zap className="h-4 w-4" /> Start Organizing
            </a>
           
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
            { v: "Images", l: "Auto Sort" },
{ v: "PDFs", l: "Smart Organization" },
{ v: "Videos", l: "Fast Detection" },
            ].map((s) => (
              <div key={s.l} className="glass px-3 py-3">
                <div className="text-xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


