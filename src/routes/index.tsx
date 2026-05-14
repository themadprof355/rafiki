import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, ShieldCheck, Truck, Droplet, Users, Clock, MapPin, Check } from "lucide-react";
import logo from "@/assets/kentank-logo.png";
import tankVertical from "@/assets/tank-vertical.jpg";
import tankSmall from "@/assets/tank-small.jpg";
import tankLineup from "@/assets/tank-lineup.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const WHATSAPP = "254752552018";
const PHONE_DISPLAY = "+254 752 552 018";
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

type Product = {
  litres: number;
  priceKsh: number;
  use: string;
  benefits: string[];
  badge?: string;
};

const products: Product[] = [
  { litres: 1000, priceKsh: 6500, use: "Small Households", benefits: ["Compact design", "Easy installation", "Ideal for single-family homes"] },
  { litres: 2000, priceKsh: 10500, use: "Family Homes", benefits: ["Popular choice", "Fits most compounds", "Great for 5-8 people"], badge: "Popular" },
  { litres: 3000, priceKsh: 14500, use: "Large Families", benefits: ["Extended water supply", "Low maintenance", "UV-resistant material"] },
  { litres: 4000, priceKsh: 18500, use: "Rental Properties", benefits: ["Serves multiple units", "Durable multi-rib design", "Long lifespan"] },
  { litres: 5000, priceKsh: 24500, use: "Small Businesses", benefits: ["Reliable daily supply", "Heavy-duty construction", "Weather-resistant"], badge: "Best Value" },
  { litres: 6000, priceKsh: 27500, use: "Commercial Use", benefits: ["High-volume storage", "Stable base design", "Chemical-free liner"] },
  { litres: 8000, priceKsh: 32500, use: "Schools & Institutions", benefits: ["Large community supply", "Industrial-grade", "Low evaporation"] },
  { litres: 10000, priceKsh: 45500, use: "Farms & Agriculture", benefits: ["Irrigation ready", "Livestock water supply", "Rugged outdoor tank"], badge: "Farm Favourite" },
  { litres: 16000, priceKsh: 67500, use: "Large Farms & Industry", benefits: ["Massive reserve", "Industrial-grade walls", "Minimal footprint"] },
  { litres: 20000, priceKsh: 98500, use: "Industrial & Estate", benefits: ["Estate-level supply", "Backed by warranty", "Fire reserve capable"] },
  { litres: 24000, priceKsh: 135000, use: "Industrial / Government", benefits: ["Maximum capacity", "Heavy-duty ribbed walls", "Long-term investment"] },
];

const tankImageFor = (litres: number) =>
  litres <= 1500 ? tankSmall : litres <= 5000 ? tankVertical : tankLineup;

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Sizes />
      <Trust />
      <OrderForm />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const nav = [
    { href: "#home", label: "Home" },
    { href: "#sizes", label: "Sizes" },
    { href: "#why", label: "Why Choose Us" },
    { href: "#order", label: "Order" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur" id="home">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Kentank logo" className="h-10 w-auto md:h-12" />
          <span className="sr-only">Kentank Tanks</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-primary hover:text-primary/70 transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:+${WHATSAPP}`}
            className="hidden items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={wa("Hello, I want to enquire about a Kentank water tank.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow transition hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-yellow)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="text-primary">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Kentank Tanks Supplier
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Reliable Kentank Water Tanks Delivered Near You
          </h1>
          <p className="mt-4 max-w-lg text-base text-primary/85 md:text-lg">
            Strong, long-lasting Kentank water tanks for homes, farms, schools and
            businesses. Choose your size and order on WhatsApp — fast replies and
            delivery assistance available.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={wa("Hello, I want to order a Kentank water tank. Size: ____. Quantity: ____. Location: ____.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-base font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold text-primary/85 sm:flex sm:flex-wrap sm:gap-x-6">
            <li className="inline-flex items-center gap-1.5"><Check className="h-4 w-4" /> 1,000 – 24,000 L</li>
            <li className="inline-flex items-center gap-1.5"><Check className="h-4 w-4" /> Genuine quality</li>
            <li className="inline-flex items-center gap-1.5"><Check className="h-4 w-4" /> Delivery help</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={tankLineup}
            alt="Kentank water tanks lineup"
            className="relative w-full rounded-2xl border-4 border-primary/20 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sizes ---------- */
function Sizes() {
  return (
    <section id="sizes" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Tank Sizes"
          title="Pick Your Kentank Size"
          subtitle="From compact home tanks to industrial-grade reserves. Tap any size to order on WhatsApp."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.litres} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const msg = `Hello, I want to order/enquire about a Kentank water tank. Size: ${product.litres}L. Quantity: 1. Location: [your location].`;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      {product.badge && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow">
          {product.badge}
        </span>
      )}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={tankImageFor(product.litres)}
          alt={`Kentank ${product.litres} litre water tank`}
          className="h-full w-full object-cover transition group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-2xl font-extrabold text-primary">
            {product.litres.toLocaleString()}<span className="text-base font-bold"> L</span>
          </h3>
          <span className="text-sm font-semibold text-muted-foreground">{product.use}</span>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
            </li>
          ))}
        </ul>
        <a
          href={wa(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
        >
          <MessageCircle className="h-4 w-4" /> Order This Size
        </a>
      </div>
    </article>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  const items = [
    { icon: ShieldCheck, title: "Durable Storage", desc: "Strong, UV-resistant tanks built to last for years." },
    { icon: Users, title: "Homes, Farms, Schools", desc: "Sizes for households, businesses and institutions." },
    { icon: MessageCircle, title: "Easy WhatsApp Ordering", desc: "Send your location and size — we reply fast." },
    { icon: Truck, title: "Delivery Assistance", desc: "We help arrange delivery to your site." },
    { icon: Droplet, title: "Multiple Capacities", desc: "From 1,000 L to 24,000 L — pick what suits you." },
    { icon: ShieldCheck, title: "Long-Lasting Design", desc: "Heavy-duty multi-rib walls with stable bases." },
  ];
  return (
    <section className="border-y border-border bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Why Kentank" title="Built For Real Kenyan Homes & Businesses" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Order Form ---------- */
function OrderForm() {
  const [form, setForm] = useState({ name: "", location: "", size: "2000", quantity: "1", note: "" });
  const [error, setError] = useState<string | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim() || !form.size || !form.quantity) {
      setError("Please fill in your name, location, tank size and quantity.");
      return;
    }
    setError(null);
    const msg = `Hello, I want to order a Kentank water tank.
Name: ${form.name.trim()}
Location: ${form.location.trim()}
Size: ${form.size}L
Quantity: ${form.quantity}
Note: ${form.note.trim() || "-"}`;
    window.open(wa(msg), "_blank", "noopener");
  };

  return (
    <section id="order" className="py-16 md:py-20" style={{ background: "var(--gradient-yellow)" }}>
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center text-primary">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Order Now
          </span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Send Your Kentank Order on WhatsApp</h2>
          <p className="mt-2 text-primary/80">Fill in a few details and we'll reply on WhatsApp with confirmation and delivery info.</p>
        </div>
        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-primary/15 bg-background p-6 shadow-xl md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input required maxLength={80} value={form.name} onChange={set("name")} className="kt-input" placeholder="Jane Wanjiku" />
            </Field>
            <Field label="Location">
              <input required maxLength={120} value={form.location} onChange={set("location")} className="kt-input" placeholder="Ruiru, Kiambu" />
            </Field>
            <Field label="Tank size">
              <select value={form.size} onChange={set("size")} className="kt-input">
                {products.map((p) => (
                  <option key={p.litres} value={p.litres}>{p.litres.toLocaleString()} L — {p.use}</option>
                ))}
              </select>
            </Field>
            <Field label="Quantity">
              <input type="number" min={1} max={200} required value={form.quantity} onChange={set("quantity")} className="kt-input" />
            </Field>
          </div>
          <Field label="Optional note">
            <textarea rows={3} maxLength={400} value={form.note} onChange={set("note")} className="kt-input" placeholder="Preferred delivery date, accessories, etc." />
          </Field>
          {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition hover:brightness-110">
            <MessageCircle className="h-5 w-5" /> Send Order on WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Opens WhatsApp to {PHONE_DISPLAY} with your order prefilled.
          </p>
        </form>
      </div>
      <style>{`.kt-input{width:100%;border:1.5px solid var(--border);background:var(--background);color:var(--foreground);border-radius:0.6rem;padding:0.65rem 0.8rem;font-size:0.95rem;outline:none;transition:border-color .15s}.kt-input:focus{border-color:var(--primary)}`}</style>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const points = [
    { title: "Fast response", desc: "We reply quickly on WhatsApp during business hours." },
    { title: "Genuine quality tanks", desc: "Strong, food-grade Kentank water tanks." },
    { title: "Help choosing the right size", desc: "Tell us your household or use-case and we'll recommend." },
    { title: "Simple WhatsApp ordering", desc: "No long forms — just chat and confirm." },
    { title: "Call support available", desc: "Prefer talking? Call us directly any time." },
  ];
  return (
    <section id="why" className="bg-background py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading eyebrow="Why Choose Us" title="Trusted Kentank Tank Supplier in Kenya" left />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={tankVertical} alt="Kentank vertical water tank" className="w-full rounded-2xl border-4 border-secondary/50 object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "How do I order?", a: "Pick your tank size and tap any WhatsApp button on this page, or fill the order form. We reply with confirmation and delivery details." },
    { q: "Do you deliver?", a: "Yes — we offer delivery assistance to most areas in Kenya. Share your location on WhatsApp for a delivery quote." },
    { q: "What sizes are available?", a: "We stock Kentank tanks from 1,000 litres up to 24,000 litres. See the Sizes section above." },
    { q: "Can I call before ordering?", a: `Absolutely. Call us directly on ${PHONE_DISPLAY} for size advice and orders.` },
    { q: "How do I know which size I need?", a: "Tell us your household size or use-case (home, school, farm, business) on WhatsApp and we'll recommend the right tank." },
  ];
  return (
    <section id="faq" className="border-t border-border bg-muted/40 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-primary">
                {f.q}
                <span className="text-xl text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Contact" title="Talk To Us About Your Kentank Order" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href={wa("Hello, I'd like to order a Kentank water tank. Location: ____. Size: ____. Quantity: ____.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-primary">WhatsApp (preferred)</h3>
            <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
          </a>
          <a href={`tel:+${WHATSAPP}`} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-primary">Call Now</h3>
            <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
          </a>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-primary">Business Hours</h3>
            <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
              <li>Mon – Sat: 8:00 AM – 6:00 PM</li>
              <li>Sunday: WhatsApp only</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-primary">Service Area</h3>
            <p className="mt-1 text-sm text-muted-foreground">Nairobi & countrywide delivery assistance available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <img src={logo} alt="Kentank logo" className="h-12 w-auto rounded bg-secondary p-1" />
          <p className="mt-3 text-sm text-primary-foreground/75">
            Order durable Kentank water tanks for homes, farms, schools and businesses.
            Fast WhatsApp ordering and delivery assistance in Kenya.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-yellow)" }}>Quick Links</h4>
          <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm">
            {["Home", "Sizes", "Why", "Order", "Faq", "Contact"].map((l) => (
              <li key={l}><a className="text-primary-foreground/85 hover:text-primary-foreground" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--brand-yellow)" }}>Get In Touch</h4>
          <div className="mt-3 flex flex-col gap-2">
            <a href={wa("Hello, I'd like to order a Kentank water tank.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
              <MessageCircle className="h-4 w-4" /> WhatsApp Order
            </a>
            <a href={`tel:+${WHATSAPP}`} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-primary-foreground/15 px-4 pt-4 text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Kentank Tanks Supplier. Independent Kentank water tank retailer.
      </div>
    </footer>
  );
}

/* ---------- Floating Actions ---------- */
function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        href={wa("Hello, I'd like to order a Kentank water tank. Location: ____. Size: ____. Quantity: ____.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp order"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:+${WHATSAPP}`}
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

/* ---------- Helpers ---------- */
function SectionHeading({ eyebrow, title, subtitle, left }: { eyebrow?: string; title: string; subtitle?: string; left?: boolean }) {
  return (
    <div className={left ? "" : "text-center"}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      {subtitle && <p className={`mt-3 text-muted-foreground ${left ? "" : "mx-auto max-w-2xl"}`}>{subtitle}</p>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-primary">{label}</span>
      {children}
    </label>
  );
}
