import { useEffect } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import LocationSection from "../components/LocationSection";
import QuoteSection from "../components/QuoteSection";
import CollectionCard from "../components/CollectionCard";

import Icon from "../components/Icon";
import { Card, CardContent } from "../components/Card";
import Button from "../components/Button";

import { businessInfo } from "../data/businessInfo";
import { productCollections } from "../data/collections";
import { seoPages } from "../data/seoPages";

function updateMeta(title, description) {
  document.title = title;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

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

function WhyPolySection() {
  return (
    <section
      id="why-poly"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
            Made for local conditions
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Why Choose HDPE Outdoor Furniture in Minnesota?
          </h2>

          <p className="text-lg text-stone-600 mb-8">
            Our outdoor furniture is built for harsh Minnesota
            climates. From snow and ice to sun and humidity,
            HDPE poly furniture will not crack, rot, splinter,
            or require painting.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Low maintenance",
              "Weather resistant",
              "Great for lake homes",
              "Comfortable and durable",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-stone-200 shadow-sm"
              >
                <Icon name="check" className="h-5 w-5" />

                <span className="font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <img
          src={productCollections[0].image}
          alt="HDPE poly outdoor furniture Minnesota"
          className="rounded-3xl shadow-xl object-cover h-[460px] w-full"
        />
      </div>
    </section>
  );
}

function CollectionsSection({ navigateTo }) {
  return (
    <section
      id="collections"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
              Product offerings
            </p>

            <h2 className="text-4xl font-bold">
              Outdoor Furniture Collections
            </h2>
          </div>

          <p className="max-w-xl text-stone-600">
            Browse durable patio furniture, dock furniture,
            deck furniture, dining sets, gliders, benches,
            and conversation seating for Minnesota outdoor living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {productCollections.map((item) => (
            <CollectionCard
              key={item.slug}
              item={item}
              navigateTo={navigateTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoCardsSection({ navigateTo }) {
  return (
    <section
      id="seo-pages"
      className="py-20 px-6 bg-stone-100"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
            Explore by category
          </p>

          <h2 className="text-4xl font-bold mb-5">
            Explore Outdoor Furniture Collections
          </h2>

          <p className="text-lg text-stone-600">
            Browse popular outdoor furniture categories and
            learn more about durable HDPE patio furniture.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {seoPages.map((page) => (
            <Card
              key={page.slug}
              className="rounded-3xl shadow-md border-stone-200 h-full"
            >
              <CardContent className="p-7">

                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">
                  {page.eyebrow}
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  {page.title}
                </h3>

                <p className="text-stone-600 mb-6">
                  {page.description}
                </p>

                <ul className="space-y-3 mb-7">
                  {page.bullets.map((bullet) => (
                    <CheckItem key={bullet}>
                      {bullet}
                    </CheckItem>
                  ))}
                </ul>

                <a
                  href={page.slug}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(page.slug);
                  }}
                >
                  <Button
                    variant="outline"
                    className="rounded-full"
                  >
                    View Page
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ navigateTo }) {
  useEffect(() => {
    updateMeta(
      "Outdoor Furniture Near Lake Minnetonka | Westonka Outdoor Living",
      "Shop premium HDPE outdoor furniture near Lake Minnetonka."
    );
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">

      <Header navigateTo={navigateTo} />

      <Hero
        title="Outdoor Furniture Near Lake Minnetonka"
        eyebrow="Premium HDPE poly outdoor furniture"
        description="Premium HDPE poly patio furniture designed for Minnesota weather."
        image={productCollections[0].image}
        primaryHref="/#collections"
        primaryLabel="Shop Outdoor Furniture"
        secondaryHref="/#quote"
        secondaryLabel="Get a Quote"
        navigateTo={navigateTo}
      />

      <WhyPolySection />

      <CollectionsSection navigateTo={navigateTo} />

      <SeoCardsSection navigateTo={navigateTo} />

      <LocationSection />

      <QuoteSection />

      <Footer
        text={`Outdoor Furniture Near Lake Minnetonka • ${businessInfo.phone}`}
      />
    </div>
  );
}