import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection, waLink } from "@/components/site/shared";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Mabati Products — Rafiki Roofing Kenya" },
      { name: "description", content: "Shop corrugated, versatile, dumuzas, box profile and reject mabati. Transparent per-metre pricing. Order on WhatsApp." },
      { property: "og:title", content: "Shop Mabati Products — Rafiki Roofing" },
      { property: "og:description", content: "Browse all mabati profiles with honest per-metre pricing." },
    ],
  }),
  component: ShopPage,
});

const products = [
  { name: "Corrugated Iron Sheets", per: 350, rows: [["2 M", 700], ["2.5 M", 850], ["3 M", 1050]], tag: "Most popular" },
  { name: "Versatile Iron Sheets (G30)", per: 550, rows: [["2 M", 1100], ["2.5 M", 1350], ["3 M", 1650]], tag: "Premium" },
  { name: "Ordinary Dumuzas (G30)", per: 300, rows: [["2 M", 600], ["2.5 M", 750], ["3 M", 900]] },
  { name: "Box Profile Gauge 30", per: 400, rows: [["2 M", 800], ["2.5 M", 1000], ["3 M", 1200]] },
  { name: "Reject Ordinary Mabati", per: 0, rows: [["2 M", 300], ["2.5 M", 350], ["3 M", 450]], tag: "Best Value" },
  { name: "Reject Box Profile", per: 0, rows: [["2 M", 400], ["2.5 M", 500], ["3 M", 600]] },
] as const;

function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Shop"
        title="Shop Mabati Products"
        description="Every profile we sell, with honest per-metre prices. Tap a card to order on WhatsApp."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="relative flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              {p.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-secondary-foreground">
                  {p.tag}
                </span>
              )}
              <h3 className="text-xl font-bold text-primary">{p.name}</h3>
              {p.per > 0 && (
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">Ksh {p.per}</span>
                  <span className="text-sm text-muted-foreground">/ metre</span>
                </div>
              )}
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {p.rows.map(([len, price]) => (
                  <li key={len} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{len}</span>
                    <span className="font-bold">Ksh {price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hello Rafiki Roofing, I'd like to order ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Order this
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom length or bulk order? <Link to="/quote" className="font-bold text-primary hover:underline">Request a quote</Link>.
        </p>
      </section>
      <CTASection />
      <SiteFooter />
    </div>
  );
}
