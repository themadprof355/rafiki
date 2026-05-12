import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/corrugated-11-3")({
  head: () => ({
    meta: [
      { title: "Corrugated 11/3 Mabati — Specs & Prices | Rafiki Roofing" },
      { name: "description", content: "Corrugated 11/3 iron sheets in Kenya — classic wave profile, gauge 30. Per-metre prices, specs and ordering." },
      { property: "og:title", content: "Corrugated 11/3 Iron Sheets — Rafiki Roofing" },
      { property: "og:description", content: "Specs and pricing for Corrugated 11/3 mabati." },
    ],
  }),
  component: CorrugatedPage,
});

function CorrugatedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Product"
        title="Corrugated 11/3 Iron Sheets"
        description="The classic, time-tested mabati profile. Strong waves, easy fitting, suitable for homes, stores and farm structures."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">Specifications</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Profile: Corrugated 11/3 (11 waves, 3-inch pitch)",
              "Gauge: 30 (standard) — heavier gauges on order",
              "Coating: Galvanized / pre-painted options",
              "Effective cover: ~760 mm",
              "Lengths available: 2 M, 2.5 M, 3 M (custom on request)",
              "Colours: Plain galvanized, maroon, brick red, charcoal grey, forest green",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--brand-yellow)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold text-primary">Pricing</h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold">Ksh 350</span>
            <span className="text-sm text-muted-foreground">/ metre</span>
          </div>
          <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
            <li className="flex justify-between"><span className="text-muted-foreground">2 M sheet</span><span className="font-bold">Ksh 700</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">2.5 M sheet</span><span className="font-bold">Ksh 850</span></li>
            <li className="flex justify-between"><span className="text-muted-foreground">3 M sheet</span><span className="font-bold">Ksh 1,050</span></li>
          </ul>
          <Link to="/quote" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            Get a Quote
          </Link>
        </div>
      </section>
      <section className="bg-muted/40 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-extrabold">Where Corrugated 11/3 fits best</h2>
          <p className="mt-3 text-muted-foreground">
            Ideal for residential homes, rental units, shops, livestock structures
            and budget-conscious commercial buildings. Easy to install with
            standard roofing nails or screws and cost-effective to maintain.
          </p>
        </div>
      </section>
      <CTASection title="Order Corrugated 11/3 today" message="Hello Rafiki Roofing, I'd like to order Corrugated 11/3 mabati." />
      <SiteFooter />
    </div>
  );
}
