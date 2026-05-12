import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter, PageHero, waLink } from "@/components/site/shared";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Mabati Quote — Rafiki Roofing Kenya" },
      { name: "description", content: "Get a fast, free mabati quote. Tell us your project size, profile and location and we'll reply on WhatsApp." },
      { property: "og:title", content: "Request a Quote — Rafiki Roofing" },
      { property: "og:description", content: "Free quotes for builders, homeowners and contractors. Reply within minutes on WhatsApp." },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [form, setForm] = useState({
    name: "", location: "", profile: "Corrugated", length: "3 M", quantity: "20", notes: "",
  });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const message = `Hello Rafiki Roofing, I'd like a quote.
Name: ${form.name}
Location: ${form.location}
Profile: ${form.profile}
Length: ${form.length}
Quantity (sheets): ${form.quantity}
Notes: ${form.notes}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Get a Quote"
        title="Request a Free Mabati Quote"
        description="Builder, homeowner or contractor — tell us what you need and we'll reply on WhatsApp with the best price."
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <form
          onSubmit={(e) => { e.preventDefault(); window.open(waLink(message), "_blank"); }}
          className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your name">
              <input required value={form.name} onChange={set("name")} className="input" placeholder="John Mwangi" />
            </Field>
            <Field label="Location">
              <input required value={form.location} onChange={set("location")} className="input" placeholder="Nairobi, Kiambu Rd" />
            </Field>
            <Field label="Profile">
              <select value={form.profile} onChange={set("profile")} className="input">
                <option>Corrugated</option>
                <option>Versatile (G30)</option>
                <option>Ordinary Dumuzas (G30)</option>
                <option>Box Profile (G30)</option>
                <option>Reject Ordinary</option>
                <option>Reject Box Profile</option>
              </select>
            </Field>
            <Field label="Length per sheet">
              <select value={form.length} onChange={set("length")} className="input">
                <option>2 M</option>
                <option>2.5 M</option>
                <option>3 M</option>
                <option>Custom</option>
              </select>
            </Field>
            <Field label="Quantity (sheets)">
              <input type="number" min={1} value={form.quantity} onChange={set("quantity")} className="input" />
            </Field>
          </div>
          <Field label="Notes (delivery, accessories, timing)">
            <textarea value={form.notes} onChange={set("notes")} rows={4} className="input" placeholder="Need ridges, screws and delivery to site by Friday." />
          </Field>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
            <MessageCircle className="h-5 w-5" /> Send Quote on WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Submitting opens WhatsApp with your details prefilled to +254 787 429 828.
          </p>
        </form>
      </section>
      <SiteFooter />
      <style>{`.input{width:100%;border:1px solid var(--border);background:transparent;border-radius:0.5rem;padding:0.6rem 0.75rem;font-size:0.9rem;outline:none}.input:focus{border-color:var(--primary)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}
