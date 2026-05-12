import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Check } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/residential-roofing")({
  head: () => ({
    meta: [
      { title: "Residential Roofing in Kenya — Rafiki Roofing Mabati" },
      { name: "description", content: "Mabati for homes, bungalows and maisonettes. Quality iron sheets and accessories for renovation and new builds." },
      { property: "og:title", content: "Residential Roofing — Rafiki Roofing" },
      { property: "og:description", content: "Roofing mabati for homeowners across Kenya." },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Homeowners"
        title="Residential Roofing"
        description="Whether you're building from scratch or renovating, Rafiki supplies the right mabati at the right price."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Bungalows & Maisonettes", desc: "Box profile and versatile sheets give a modern, premium finish." },
            { title: "Rentals & SQs", desc: "Corrugated and dumuzas keep costs low without sacrificing durability." },
            { title: "Renovation", desc: "Match existing profiles and colours when re-roofing older homes." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <Home className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold">What's included</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Iron sheets in any profile, any length",
                "Ridges, valleys, flashings and edge caps",
                "Roofing screws, nails and rubber washers",
                "Gutters and downpipes on request",
                "Free advice on quantity and accessories",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" style={{ color: "var(--brand-yellow)" }} />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold">Not sure what you need?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us your roof dimensions on WhatsApp and we'll calculate the
              exact number of sheets and accessories required.
            </p>
            <Link to="/quote" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:brightness-110">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
      <CTASection title="Roof your home with confidence" />
      <SiteFooter />
    </div>
  );
}
