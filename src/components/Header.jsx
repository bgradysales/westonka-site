import Button from "./Button";
import { businessInfo } from "../data/businessInfo";

export default function Header({ navigateTo }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="/"
          className="block"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("/");
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
            href="#collections"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/#collections");
            }}
          >
            Outdoor Furniture
          </a>

          <a
            href="#why-poly"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/#why-poly");
            }}
          >
            Why HDPE
          </a>

          <a
            href="#seo-pages"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/#seo-pages");
            }}
          >
            Local Pages
          </a>

          <a
            href="#location"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/#location");
            }}
          >
            Location
          </a>

          <a
            href="#quote"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/#quote");
            }}
          >
            Request Quote
          </a>
        </nav>

        <a href={businessInfo.phoneHref}>
          <Button className="rounded-full">
            Call Now
          </Button>
        </a>
      </div>
    </header>
  );
}