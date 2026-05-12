import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, WHATSAPP, waLink } from "@/components/site/shared";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Rafiki Roofing — WhatsApp, Phone & Visit" },
      { name: "description", content: "Contact Rafiki Roofing Mabati. WhatsApp +254 787 429 828, phone, email and showroom visit details." },
      { property: "og:title", content: "Contact Rafiki Roofing" },
      { property: "og:description", content: "Get in touch by WhatsApp, phone or visit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Talk to Rafiki Roofing"
        description="WhatsApp is the fastest way to reach us. Calls and visits welcome too."
      />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={waLink("Hello Rafiki Roofing!")}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">WhatsApp (preferred)</h3>
            <p className="mt-1 text-sm text-muted-foreground">+254 787 429 828 — fast replies, all orders & quotes.</p>
          </a>
          <a href={`tel:+${WHATSAPP}`} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Phone</h3>
            <p className="mt-1 text-sm text-muted-foreground">+254 787 429 828</p>
          </a>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Visit us</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Showroom & factory visits available by appointment. Message us
              first to confirm availability and directions.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Hours</h3>
            <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
              <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
              <li>Saturday: 8:00 AM – 4:00 PM</li>
              <li>Sunday: WhatsApp only</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Prefer email? Send your enquiry via WhatsApp first and we'll
              share an email address for formal quotes and BOQs.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
