import { useEffect } from "react";

import Header from "../components/Header";
import Button from "../components/Button";

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

export default function NotFoundPage({ navigateTo }) {
  useEffect(() => {
    updateMeta(
      "Page Not Found | Westonka Outdoor Living",
      "This page could not be found. Visit Westonka Outdoor Living for outdoor furniture near Lake Minnetonka."
    );
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Header navigateTo={navigateTo} />

      <main className="py-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
          404
        </p>

        <h1 className="text-5xl font-bold mb-5">
          Page not found
        </h1>

        <p className="text-lg text-stone-600 mb-8">
          The page you are looking for does not exist. Return home to view our outdoor furniture collections.
        </p>

        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("/");
          }}
        >
          <Button size="lg" className="rounded-full">
            Back to Home
          </Button>
        </a>
      </main>
    </div>
  );
}