import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/mabati-prices-kenya")({
  head: () => ({
    meta: [
      { title: "Mabati Prices in Kenya 2026 — Rafiki Roofing" },
      { name: "description", content: "Up-to-date mabati prices in Kenya. Compare corrugated, versatile, dumuzas, box profile and reject iron sheets per metre." },
      { property: "og:title", content: "Mabati Prices in Kenya — Rafiki Roofing" },
      { property: "og:description", content: "Compare iron sheet prices in Kenya. Honest per-metre pricing." },
    ],
  }),
  component: PricesPage,
});

const rows = [
  { name: "Corrugated", per: 350, m2: 700, m25: 850, m3: 1050 },
  { name: "Versatile G30", per: 550, m2: 1100, m25: 1350, m3: 1650 },
  { name: "Ordinary Dumuzas G30", per: 300, m2: 600, m25: 750, m3: 900 },
  { name: "Box Profile G30", per: 400, m2: 800, m25: 1000, m3: 1200 },
  { name: "Reject Ordinary", per: null, m2: 300, m25: 350, m3: 450 },
  { name: "Reject Box Profile", per: null, m2: 400, m25: 500, m3: 600 },
];

function PricesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Pricing"
        title="Mabati Prices in Kenya"
        description="Transparent per-metre pricing for every profile we stock. Updated for 2026."
      />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Profile</th>
                <th className="px-4 py-3">Per metre</th>
                <th className="px-4 py-3">2 M</th>
                <th className="px-4 py-3">2.5 M</th>
                <th className="px-4 py-3">3 M</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-border">
                  <td className="px-4 py-3 font-bold text-primary">{r.name}</td>
                  <td className="px-4 py-3">{r.per ? `Ksh ${r.per}` : "—"}</td>
                  <td className="px-4 py-3">Ksh {r.m2.toLocaleString()}</td>
                  <td className="px-4 py-3">Ksh {r.m25.toLocaleString()}</td>
                  <td className="px-4 py-3 font-semibold">Ksh {r.m3.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <p>• Prices are per single sheet at the listed length, sold in standard widths.</p>
          <p>• Custom lengths cut on request — same per-metre rate.</p>
          <p>• Bulk orders qualify for additional discounts — <Link to="/quote" className="font-bold text-primary hover:underline">request a quote</Link>.</p>
          <p>• Free / subsidised delivery available — see <Link to="/delivery" className="font-bold text-primary hover:underline">delivery info</Link>.</p>
        </div>
      </section>
      <CTASection title="Lock in today's prices" />
      <SiteFooter />
    </div>
  );
}
