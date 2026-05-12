import { useState } from "react";
import { businessInfo } from "../data/businessInfo";
import { Card, CardContent } from "./Card";
import Button from "./Button";
import Icon from "./Icon";

function LeadFormSuccess({ onReset }) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white">
        <Icon name="check" className="h-8 w-8" />
      </div>

      <h3 className="text-3xl font-bold mb-3">
        Thanks — we received your request.
      </h3>

      <p className="text-stone-600 mb-6">
        We’ll follow up soon. For faster help, call {businessInfo.phone}.
      </p>

      <Button className="rounded-full" onClick={onReset}>
        Submit Another Request
      </Button>
    </div>
  );
}

function FormInput({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-stone-700">
        {label}
      </span>

      <input
        className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400"
        {...props}
      />
    </label>
  );
}

function FormSelect({ label, name, options }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-stone-700">
        {label}
      </span>

      <select
        name={name}
        className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400 bg-white"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function LeadForm({ onSubmit }) {
  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <h3 className="text-3xl font-bold mb-2">
          Get a furniture quote
        </h3>

        <p className="text-stone-600">
          Fill this out and we’ll help you narrow down the best options.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          label="Name *"
          name="name"
          required
          placeholder="Your name"
        />

        <FormInput
          label="Phone *"
          name="phone"
          type="tel"
          required
          placeholder="Your phone number"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <FormInput
          label="City"
          name="city"
          placeholder="Mound, Minnetrista, Orono..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FormSelect
          label="Interested In"
          name="interest"
          options={[
            "Not sure yet",
            "Dining set",
            "Adirondack chairs",
            "Glider or bench",
            "Fire pit seating",
            "Counter/bar height furniture",
            "Multiple pieces",
          ]}
        />

        <FormSelect
          label="Space Type"
          name="spaceType"
          options={[
            "Patio",
            "Deck",
            "Dock",
            "Porch",
            "Fire pit area",
            "Lake home",
            "Other",
          ]}
        />
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-stone-700">
          Project Notes
        </span>

        <textarea
          name="notes"
          rows="5"
          className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400"
          placeholder="Tell us what you are looking for, approximate space size, colors, timing, or any questions."
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between pt-2">
        <Button
          type="submit"
          size="lg"
          className="rounded-full px-10"
        >
          Submit Request
        </Button>

        <p className="text-sm text-stone-500">
          Prefer to talk? Call{" "}
          <a
            className="font-semibold underline"
            href={businessInfo.phoneHref}
          >
            {businessInfo.phone}
          </a>
        </p>
      </div>
    </form>
  );
}

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="quote"
      className="py-20 px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-300 mb-3">
            Request a quote
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tell us about your outdoor space.
          </h2>

          <p className="text-lg text-stone-300 mb-8">
            Share a few details about your patio, deck, dock,
            lake home, or fire pit area and we’ll help you
            choose the right HDPE poly furniture setup.
          </p>

          <div className="space-y-4 text-stone-300">

            <div className="flex gap-3">
              <Icon
                name="check"
                className="h-5 w-5 shrink-0 mt-1"
              />

              <p>
                Local guidance for Lake Minnetonka area homes
              </p>
            </div>

            <div className="flex gap-3">
              <Icon
                name="check"
                className="h-5 w-5 shrink-0 mt-1"
              />

              <p>
                Help with layout, color combinations,
                and product options
              </p>
            </div>

            <div className="flex gap-3">
              <Icon
                name="check"
                className="h-5 w-5 shrink-0 mt-1"
              />

              <p>
                Call us directly at{" "}
                <a
                  className="underline underline-offset-4"
                  href={businessInfo.phoneHref}
                >
                  {businessInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <Card className="rounded-3xl shadow-2xl border border-stone-200 text-neutral-900">
          <CardContent className="p-7 md:p-8">
            {submitted ? (
              <LeadFormSuccess
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <LeadForm onSubmit={handleSubmit} />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}