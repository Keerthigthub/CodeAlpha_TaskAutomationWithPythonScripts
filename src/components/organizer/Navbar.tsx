import { Link } from "@tanstack/react-router";
import { FolderTree } from "lucide-react";

export function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Analytics", href: "#analytics" },
    { label: "About", href: "#about" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass glass-strong flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl btn-neon">
              <FolderTree className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Smart File Organizer</div>
              <div className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Python Automation</div>
            </div>
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {items.map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
         
        </nav>
      </div>
    </header>
  );
}
