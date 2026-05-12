import { createFileRoute } from "@tanstack/react-router";
import { Truck, Check } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Free Mabati Delivery in Kenya — Rafiki Roofing" },
      { name: "description", content: "Free and subsidised mabati delivery across Kenya. Nairobi, Kiambu, Machakos, Nakuru, Mombasa, Kisumu and beyond." },
      { property: "og:title", content: "Mabati Delivery in Kenya — Rafiki Roofing" },
      { property: "og:description", content: "Nationwide delivery with bulk-order benefits." },
    ],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Logistics"
        title="Free Delivery Across Kenya"
        description="Reliable transport coordinated to your site. Free or subsidised on qualifying orders."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Nairobi Metro", desc: "Free delivery within Nairobi, Kiambu, Kajiado and Machakos for qualifying orders." },
            { title: "Upcountry", desc: "Subsidised delivery to Nakuru, Eldoret, Kisumu, Nyeri, Meru, Embu and beyond." },
            { title: "Coast & North", desc: "Coordinated transport to Mombasa, Malindi, Garissa and northern Kenya." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-muted p-6 md:p-8">
          <h2 className="text-xl font-extrabold">How it works</h2>
          <ol className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            {[
              "Send us your order and delivery location on WhatsApp.",
              "We confirm the price, including delivery if applicable.",
              "You pay (full or deposit, depending on order size).",
              "We dispatch and share driver contact for tracking.",
            ].map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
            {["Same-day dispatch in Nairobi (cut-off 2pm)","Insured loads for large bulk orders","Off-loading assistance available","Direct site delivery — no middlemen"].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" style={{ color: "var(--brand-yellow)" }} />{t}</li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection title="Order with delivery included" />
      <SiteFooter />
    </div>
  );
}
