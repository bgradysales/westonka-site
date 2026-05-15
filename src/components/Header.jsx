import { useState } from "react";

import Button from "./Button";
import { businessInfo } from "../data/businessInfo";

export default function Header({ navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(path) {
    navigateTo(path);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="/"
          className="block"
          onClick={(event) => {
            event.preventDefault();
            goTo("/");
          }}
        >
          <p className="text-xl font-bold tracking-tight">
            Westonka Outdoor Living
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Outdoor Furniture • Lake Minnetonka Area
          </p>
        </a>

        <nav className="hidden lg:flex gap-7 text-sm font-medium text-stone-700">
          <a
            href="/#collections"
            onClick={(event) => {
              event.preventDefault();
              goTo("/#collections");
            }}
          >
            Outdoor Furniture
          </a>

          <a
            href="/colors"
            onClick={(event) => {
              event.preventDefault();
              goTo("/colors");
            }}
          >
            Colors
          </a>

          <a
            href="/#why-poly"
            onClick={(event) => {
              event.preventDefault();
              goTo("/#why-poly");
            }}
          >
            Why HDPE
          </a>

          <a
            href="/#location"
            onClick={(event) => {
              event.preventDefault();
              goTo("/#location");
            }}
          >
            Location
          </a>

          <a
            href="/#quote"
            onClick={(event) => {
              event.preventDefault();
              goTo("/#quote");
            }}
          >
            Request Quote
          </a>
        </nav>

        <div className="hidden lg:block">
          <a href={businessInfo.phoneHref}>
            <Button className="rounded-full">
              Call Now
            </Button>
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-semibold text-stone-800">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                goTo("/");
              }}
            >
              Home
            </a>

            <a
              href="/#collections"
              onClick={(event) => {
                event.preventDefault();
                goTo("/#collections");
              }}
            >
              Outdoor Furniture
            </a>

            <a
              href="/colors"
              onClick={(event) => {
                event.preventDefault();
                goTo("/colors");
              }}
            >
              Color Options
            </a>

            <a
              href="/#why-poly"
              onClick={(event) => {
                event.preventDefault();
                goTo("/#why-poly");
              }}
            >
              Why HDPE
            </a>

            <a
              href="/#location"
              onClick={(event) => {
                event.preventDefault();
                goTo("/#location");
              }}
            >
              Location
            </a>

            <a
              href="/#quote"
              onClick={(event) => {
                event.preventDefault();
                goTo("/#quote");
              }}
            >
              Request Quote
            </a>

            <a href={businessInfo.phoneHref}>
              <Button className="rounded-full w-full mt-2">
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}