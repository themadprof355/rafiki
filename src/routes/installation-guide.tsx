import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/installation-guide")({
  head: () => ({
    meta: [
      { title: "Mabati Installation Guide — Rafiki Roofing Kenya" },
      { name: "description", content: "Step-by-step mabati installation guide for fundis and DIY builders. Measuring, fixing, ridges and finishing." },
      { property: "og:title", content: "Mabati Installation Guide — Rafiki Roofing" },
      { property: "og:description", content: "How to install iron sheets the right way." },
    ],
  }),
  component: GuidePage,
});

const steps = [
  { t: "1. Measure your roof", d: "Measure each slope: rafter length × wall plate width. Add 5–10% for overlaps and waste." },
  { t: "2. Choose profile & gauge", d: "Corrugated for budget, Box Profile or Versatile for premium look. Gauge 30 is standard." },
  { t: "3. Order sheets & accessories", d: "Confirm sheet count, length, ridges, valleys, flashings and roofing screws/nails." },
  { t: "4. Prepare the truss & purlins", d: "Purlin spacing typically 600–900 mm, depending on gauge and span." },
  { t: "5. Lay sheets correctly", d: "Start from the leeward end. Side-lap one full corrugation; end-lap at least 150 mm." },
  { t: "6. Fix with screws/nails", d: "Fix at every second corrugation on purlins, with rubber-washered screws for box profile." },
  { t: "7. Install ridges & flashings", d: "Cap the apex with ridges. Seal walls and gables with flashings to prevent leaks." },
  { t: "8. Finish & inspect", d: "Walk the roof carefully, tighten loose fasteners, clear all metal off-cuts to avoid rust stains." },
];

function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="How-to"
        title="Mabati Installation Guide"
        description="A practical guide for fundis, contractors and serious DIY builders — from measuring to finishing."
      />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <ol className="space-y-5">
          {steps.map((s) => (
            <li key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-primary">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">
          Disclaimer: this guide covers general best practice. Always follow your engineer's
          drawings and local building regulations for structural and safety requirements.
        </p>
      </section>
      <CTASection title="Need help choosing the right sheet?" />
      <SiteFooter />
    </div>
  );
}
