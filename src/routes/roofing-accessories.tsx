import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection, waLink } from "@/components/site/shared";

export const Route = createFileRoute("/roofing-accessories")({
  head: () => ({
    meta: [
      { title: "Roofing Accessories — Screws, Ridges, Gutters | Rafiki Roofing" },
      { name: "description", content: "Roofing accessories in Kenya: screws, ridges, valleys, flashings, gutters and downpipes. One-stop shop for your roof." },
      { property: "og:title", content: "Roofing Accessories — Rafiki Roofing" },
      { property: "og:description", content: "Everything you need to complete the roof." },
    ],
  }),
  component: AccessoriesPage,
});

const items = [
  { name: "Roofing screws & nails", desc: "Self-drilling screws with rubber washers, plain roofing nails." },
  { name: "Ridges", desc: "Plain and pre-painted ridges to match your sheet colour." },
  { name: "Valleys", desc: "Galvanized valleys for clean water channeling at roof junctions." },
  { name: "Flashings & edge caps", desc: "Custom-bent flashings to seal walls, gables and chimneys." },
  { name: "Gutters & downpipes", desc: "PVC and galvanized gutters with brackets and elbows." },
  { name: "Insulation & polythene", desc: "Roof underlay, polythene and basic insulation rolls." },
];

function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Complete the roof"
        title="Roofing Accessories"
        description="Everything you need beyond the sheets — fixings, finishes and water management."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">{i.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
              <a
                href={waLink(`Hello Rafiki Roofing, please send me a price for ${i.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Get price →
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Pricing varies by gauge, length and finish — message us for current rates.
        </p>
      </section>
      <CTASection title="Bundle accessories with your sheets" />
      <SiteFooter />
    </div>
  );
}
