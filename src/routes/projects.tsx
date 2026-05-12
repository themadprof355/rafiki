import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-mabati.jpg";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Gallery — Rafiki Roofing Mabati" },
      { name: "description", content: "Completed mabati roofing projects across Kenya. Homes, schools, churches and commercial buildings roofed with Rafiki." },
      { property: "og:title", content: "Projects Gallery — Rafiki Roofing" },
      { property: "og:description", content: "See roofs we've supplied across Kenya." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "3-bedroom maisonette, Kiambu", profile: "Box Profile G30, charcoal grey", sheets: "120 sheets" },
  { title: "Primary school dorm, Murang'a", profile: "Corrugated 11/3, brick red", sheets: "240 sheets" },
  { title: "Warehouse, Athi River", profile: "Box Profile G30, plain galvanized", sheets: "480 sheets" },
  { title: "Church hall, Nakuru", profile: "Versatile G30, maroon", sheets: "180 sheets" },
  { title: "Rental units, Ruiru", profile: "Ordinary Dumuzas G30, brick red", sheets: "320 sheets" },
  { title: "Farm shed, Kajiado", profile: "Reject Box Profile, plain", sheets: "90 sheets" },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Our work"
        title="Projects Gallery"
        description="A snapshot of recent roofs we've supplied — from family homes to large commercial sites."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={hero} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.profile}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{p.sheets}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Add your project to our gallery" />
      <SiteFooter />
    </div>
  );
}
