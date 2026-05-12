import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Check } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/commercial-industrial-roofing")({
  head: () => ({
    meta: [
      { title: "Commercial & Industrial Roofing — Rafiki Roofing Kenya" },
      { name: "description", content: "Bulk mabati for warehouses, schools, churches, factories and commercial projects across Kenya." },
      { property: "og:title", content: "Commercial & Industrial Roofing — Rafiki Roofing" },
      { property: "og:description", content: "Bulk supply for contractors and institutions." },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Contractors & Institutions"
        title="Commercial & Industrial Roofing"
        description="Volume pricing, reliable lead times and consistent quality for warehouses, schools, churches and factories."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Warehouses & godowns","Schools & colleges","Churches & halls","Factories & sheds"].map((t) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center">
              <Building2 className="mx-auto h-7 w-7 text-primary" />
              <h3 className="mt-3 text-base font-bold">{t}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-extrabold">Why contractors choose Rafiki</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Bulk discounts on large orders",
                "Consistent gauge and coating across batches",
                "Custom lengths cut to BOQ",
                "Coordinated delivery anywhere in Kenya",
                "Flexible payment terms for verified contractors",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" style={{ color: "var(--brand-yellow)" }} />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <h3 className="text-xl font-extrabold">Working from a BOQ?</h3>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Send us your bill of quantities and we'll return a full priced
              proposal — sheets, ridges, flashings, fasteners and delivery.
            </p>
            <Link to="/quote" className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground hover:brightness-95">
              Request bulk quote
            </Link>
          </div>
        </div>
      </section>
      <CTASection title="Roof your project at scale" message="Hello Rafiki Roofing, I'd like a quote for a commercial project." />
      <SiteFooter />
    </div>
  );
}
