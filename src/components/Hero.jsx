import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero({
  title,
  eyebrow,
  description,
  image,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  navigateTo,
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img
        src={image}
        alt={`${title} hero`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 w-full"
      >
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-200">
            {eyebrow}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-stone-100 mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={primaryHref}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(primaryHref);
              }}
            >
              <Button size="lg" className="rounded-full">
                {primaryLabel}
              </Button>
            </a>

            <a
              href={secondaryHref}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(secondaryHref);
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-white/10 text-white border-white hover:bg-white hover:text-neutral-900"
              >
                {secondaryLabel}
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}