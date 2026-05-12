import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Hammer, Truck } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, CTASection } from "@/components/site/shared";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Rafiki Roofing Mabati — Kenya" },
      { name: "description", content: "Rafiki Roofing supplies quality mabati across Kenya, backed by City Engineering Works heritage and years of manufacturing experience." },
      { property: "og:title", content: "About Rafiki Roofing" },
      { property: "og:description", content: "Our heritage, values and what makes us a trusted mabati supplier." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Our story"
        title="About Rafiki Roofing"
        description="A trusted mabati supplier built on years of manufacturing experience and a simple promise: honest prices, real quality."
      />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-neutral max-w-none text-foreground">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Rafiki Roofing Mabati was built on the back of decades of roofing
            heritage from <strong className="text-foreground">City Engineering Works</strong>,
            one of Kenya's experienced steel and roofing manufacturers. That
            background lets us source genuine gauge sheets directly and pass
            real value to our customers.
          </p>
          <p className="mt-4 text-muted-foreground">
            We supply homeowners, builders, contractors, schools, churches and
            factories across the country. Whether your job is one bundle of
            sheets for a kiosk or a thousand-sheet warehouse, we treat every
            order with the same care.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Genuine quality", desc: "True-gauge sheets sourced from trusted mills." },
            { icon: Hammer, title: "Honest pricing", desc: "Per-metre rates, no hidden surprises." },
            { icon: Truck, title: "Nationwide reach", desc: "Delivery coordinated anywhere in Kenya." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Work with a supplier you can trust" />
      <SiteFooter />
    </div>
  );
}
