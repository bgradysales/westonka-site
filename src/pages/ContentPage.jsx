import { useEffect } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Icon from "../components/Icon";

import { Card, CardContent } from "../components/Card";
import { businessInfo } from "../data/businessInfo";

function updateMeta(title, description) {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", description);
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-stone-700">
      <Icon name="check" className="h-5 w-5 shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function ProductGallery({ page, title }) {
  if (!page.products || page.products.length === 0) {
    return null;
  }

  return (
    <section className="px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
            Product Photos
          </p>

          <h2 className="text-4xl font-bold">
            {title} Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {page.products.map((product) => (
            <div
              key={image}
              className="rounded-3xl bg-white border border-stone-200 shadow-md overflow-hidden"
            >
              <img
                src={image}
                alt={`${title} product photo ${index + 1}`}
                className="w-full h-[420px] object-contain bg-white p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContentPage({
  page,
  navigateTo,
  type = "seo",
}) {
  const image = page.heroImage || page.image;
  const title = page.pageTitle || page.title;
  const description = page.pageDescription || page.description;
  const eyebrow = page.eyebrow || "Westonka Outdoor Living";

  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    businessInfo.mapQuery
  )}`;

  useEffect(() => {
    updateMeta(page.metaTitle, page.metaDescription);
  }, [page.metaTitle, page.metaDescription]);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Header navigateTo={navigateTo} />

      <Hero
        title={title}
        eyebrow={eyebrow}
        description={description}
        image={image}
        primaryHref="/#quote"
        primaryLabel="Request a Quote"
        secondaryHref="/"
        secondaryLabel="Back to Home"
        navigateTo={navigateTo}
      />

      <ProductGallery page={page} title={title} />

      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10">
          <article className="space-y-8">
            {page.sections.map((section) => (
              <Card
                key={section.heading}
                className="rounded-3xl shadow-sm border border-stone-200"
              >
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {section.heading}
                  </h2>

                  <p className="text-lg text-stone-600 leading-relaxed">
                    {section.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </article>

          <aside>
            <Card className="rounded-3xl shadow-md border border-stone-200 sticky top-28">
              <CardContent className="p-7">
                <h3 className="text-2xl font-bold mb-4">
                  {type === "collection"
                    ? "Collection Highlights"
                    : "Popular Options"}
                </h3>

                <ul className="space-y-3 mb-7">
                  {page.bullets.map((bullet) => (
                    <CheckItem key={bullet}>{bullet}</CheckItem>
                  ))}
                </ul>

                <a
                  href="/#quote"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo("/#quote");
                  }}
                >
                  <Button className="rounded-full w-full mb-3">
                    Open Quote Form
                  </Button>
                </a>

<a
  href="/colors"
  onClick={(event) => {
    event.preventDefault();
    navigateTo("/colors");
  }}
  className="block mb-3 rounded-2xl border border-stone-300 bg-stone-50 p-4 hover:bg-white transition"
>
  <div className="flex items-center gap-2 mb-3">
    {[
      "#111111",
      "#8B6F4E",
      "#E7E1D6",
      "#1E88A8",
      "#C0392B",
    ].map((color) => (
      <span
        key={color}
        className="h-7 w-7 rounded-full border border-stone-300 shadow-sm"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>

  <p className="font-bold text-stone-900">
    View Color Options
  </p>

  <p className="text-sm text-stone-600 mt-1">
    Browse solid colors, woodgrain finishes, and popular two-tone combinations.
  </p>
</a>

                <a href={directionsHref} target="_blank" rel="noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full w-full"
                  >
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer text={`${title} • ${businessInfo.phone}`} />
    </div>
  );
}