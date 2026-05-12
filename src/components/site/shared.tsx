import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/rafiki-logo.jpg";

export const WHATSAPP = "254787429828";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

type NavLink = { to: string; label: string };
const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/mabati-prices-kenya", label: "Prices" },
  { to: "/residential-roofing", label: "Residential" },
  { to: "/commercial-industrial-roofing", label: "Commercial" },
  { to: "/roofing-accessories", label: "Accessories" },
  { to: "/projects", label: "Projects" },
  { to: "/about-us", label: "About" },
  { to: "/contact-us", label: "Contact" },
];
const footerExtraLinks: NavLink[] = [
  { to: "/quote", label: "Get a Quote" },
  { to: "/delivery", label: "Free Delivery" },
  { to: "/installation-guide", label: "Install Guide" },
  { to: "/corrugated-11-3", label: "Corrugated 11/3" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Rafiki Roofing Mabati logo" className="h-11 w-11 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="text-base font-extrabold tracking-tight">Rafiki Roofing</div>
            <div className="text-xs text-muted-foreground">Mabati — Kenya</div>
          </div>
        </Link>
        <nav className="hidden flex-wrap gap-x-5 gap-y-1 text-sm font-medium lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-primary"
              activeProps={{ className: "text-primary font-bold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={waLink("Hello Rafiki Roofing, I'd like to order mabati.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-sm transition hover:brightness-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span> Order
        </a>
      </div>
      <div className="border-t border-border/40 lg:hidden">
        <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-xs font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap text-muted-foreground hover:text-primary"
              activeProps={{ className: "text-primary font-bold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-md object-cover" />
            <span className="text-base font-bold">Rafiki Roofing Mabati</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/75">
            Quality iron sheets at honest prices. Serving homeowners,
            contractors and institutions across Kenya.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: "var(--brand-yellow)" }}>
            Explore
          </h4>
          <ul className="grid grid-cols-2 gap-y-1.5">
            {[...navLinks, ...footerExtraLinks].map((l) => (
              <li key={l.to}>
                <Link to={l.to as string} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: "var(--brand-yellow)" }}>
            Contact
          </h4>
          <ul className="space-y-2 text-primary-foreground/85">
            <li>
              <a href={`tel:+${WHATSAPP}`} className="inline-flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" /> +254 787 429 828
              </a>
            </li>
            <li>
              <a
                href={waLink("Hello Rafiki Roofing!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Nationwide delivery, Kenya
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-primary-foreground/15 px-4 pt-4 text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Rafiki Roofing Mabati. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-secondary/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to order?",
  message = "Hello Rafiki Roofing, I'd like to make an order.",
}: { title?: string; message?: string }) {
  return (
    <section className="relative overflow-hidden py-16" style={{ background: "var(--gradient-yellow)" }}>
      <div className="mx-auto max-w-4xl px-4 text-center text-primary">
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary/80">
          All orders and questions are handled directly on WhatsApp — fast replies, real prices.
        </p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition hover:scale-[1.02]"
        >
          <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
