import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-mabati.jpg";
import { ShieldCheck, Truck, Hammer, Check, MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter, CTASection, waLink } from "@/components/site/shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafiki Roofing Mabati — Quality Iron Sheets in Kenya" },
      { name: "description", content: "Affordable corrugated, versatile, box profile & dumuzas iron sheets. Order via WhatsApp +254 787 429828." },
      { property: "og:title", content: "Rafiki Roofing Mabati" },
      { property: "og:description", content: "Quality iron sheets at honest prices. Order on WhatsApp." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "254787429828";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

type Product = {
  name: string;
  tagline: string;
  perMetre: number;
  rows: { length: string; price: number }[];
  badge?: string;
};

const products: Product[] = [
  {
    name: "Corrugated Iron Sheets",
    tagline: "Classic wave profile — strong & affordable",
    perMetre: 350,
    rows: [
      { length: "2 M", price: 700 },
      { length: "2.5 M", price: 850 },
      { length: "3 M", price: 1050 },
    ],
  },
  {
    name: "Versatile Iron Sheets",
    tagline: "Gauge 30 — premium, modern finish",
    perMetre: 550,
    badge: "Premium",
    rows: [
      { length: "2 M", price: 1100 },
      { length: "2.5 M", price: 1350 },
      { length: "3 M", price: 1650 },
    ],
  },
  {
    name: "Ordinary Dumuzas Iron Sheets",
    tagline: "Gauge 30 — reliable everyday roofing",
    perMetre: 300,
    rows: [
      { length: "2 M", price: 600 },
      { length: "2.5 M", price: 750 },
      { length: "3 M", price: 900 },
    ],
  },
  {
    name: "Box Profile Gauge 30",
    tagline: "Sleek box profile, neat finish",
    perMetre: 400,
    rows: [
      { length: "2 M", price: 800 },
      { length: "2.5 M", price: 1000 },
      { length: "3 M", price: 1200 },
    ],
  },
  {
    name: "Reject Ordinary Mabati",
    tagline: "Budget-friendly — great for stores & sheds",
    perMetre: 0,
    badge: "Best Value",
    rows: [
      { length: "2 M", price: 300 },
      { length: "2.5 M", price: 350 },
      { length: "3 M", price: 450 },
    ],
  },
  {
    name: "Reject Box Profile",
    tagline: "Budget box profile sheets",
    perMetre: 0,
    rows: [
      { length: "2 M", price: 400 },
      { length: "2.5 M", price: 500 },
      { length: "3 M", price: 600 },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Rafiki Roofing Mabati logo" className="h-11 w-11 rounded-md object-cover" />
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-tight">Rafiki Roofing</div>
              <div className="text-xs text-muted-foreground">Mabati — Kenya</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#products" className="hover:text-primary">Products</a>
            <a href="#why" className="hover:text-primary">Why Us</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a
            href={waLink("Hello Rafiki Roofing, I'd like to order mabati.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-sm transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span> Order
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1600} height={900} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.22 0.07 265 / 0.6), oklch(0.18 0.05 265 / 0.95))" }} />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
              <Hammer className="h-3.5 w-3.5" /> Trusted Roofing Supplier
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              Quality <span style={{ color: "var(--brand-yellow)" }}>Mabati</span> at Honest Prices
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Corrugated, versatile, box profile and dumuzas iron sheets — sold by the metre.
              Fast service, simple ordering, straight on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hello Rafiki Roofing, I'd like to order mabati.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-lg transition hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" /> Order on WhatsApp
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                View Prices
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-yellow)" }} /> Cut to length</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-yellow)" }} /> All gauges available</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--brand-yellow)" }} /> Same-day quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Our Mabati & Prices</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Transparent pricing per metre. Tap any card to order that product on WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              {p.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-secondary-foreground">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

              {p.perMetre > 0 && (
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">Ksh {p.perMetre}</span>
                  <span className="text-sm text-muted-foreground">/ metre</span>
                </div>
              )}

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {p.rows.map((r) => (
                  <li key={r.length} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.length}</span>
                    <span className="font-bold">Ksh {r.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hello Rafiki Roofing, I'd like to order ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition group-hover:bg-secondary group-hover:text-secondary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Order this
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-muted/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">Why Choose Rafiki Roofing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Genuine gauge sheets sourced from trusted mills." },
              { icon: Truck, title: "Quick Delivery", desc: "Coordinated transport across the country on request." },
              { icon: Hammer, title: "Expert Advice", desc: "Not sure what you need? We'll guide you to the right sheet." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative overflow-hidden py-20" style={{ background: "var(--gradient-yellow)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center text-primary">
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to roof your project?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary/80">
            All orders and questions are handled directly on WhatsApp — fast replies, real prices.
          </p>
          <a
            href={waLink("Hello Rafiki Roofing, I'd like to make an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <a href={`tel:+${WHATSAPP}`} className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> +254 787 429 828
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Serving customers across Kenya
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 rounded-md object-cover" />
            <span className="text-sm font-semibold">© {new Date().getFullYear()} Rafiki Roofing Mabati</span>
          </div>
          <span className="text-xs text-primary-foreground/70">Quality roofing. Honest prices.</span>
        </div>
      </footer>
    </div>
  );
}
