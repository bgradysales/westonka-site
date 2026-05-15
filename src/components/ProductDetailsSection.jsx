import Icon from "./Icon";

const details = [
  {
    title: "20-Year Warranty",
    text: "Built for long-term outdoor use and backed by a 20-year residential warranty.",
  },
  {
    title: "American Made",
    text: "Furniture is made in the USA with quality materials and craftsmanship.",
  },
  {
    title: "Amish Made",
    text: "Built with the careful fit, finish, and attention to detail associated with Amish craftsmanship.",
  },
  {
    title: "Tangent HDPE Poly Lumber",
    text: "Tangent poly lumber will not splinter, crack, chip, peel, or rot, and it does not require painting, staining, or waterproofing.",
  },
  {
    title: "Stainless Steel Hardware",
    text: "Stainless steel fasteners and components are used throughout for long-term outdoor durability.",
  },
  {
    title: "Hidden Fasteners Where Possible",
    text: "Fasteners are hidden where the design allows, creating cleaner lines and a more finished appearance.",
  },
  {
    title: "Modern Outdoor Style",
    text: "Clean profiles, durable finishes, and modern color combinations for patios, decks, docks, and fire pit spaces.",
  },
  {
    title: "Low Maintenance",
    text: "Tangent HDPE is easy to clean with soap and water and includes built-in UV protection to help colors stay vibrant.",
  },
];

export default function ProductDetailsSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            Built Better
          </p>

          <h2 className="mb-5 text-4xl font-bold">
            Premium Details That Matter Outdoors
          </h2>

          <p className="text-lg leading-relaxed text-stone-600">
            Our poly outdoor furniture is built for Minnesota weather, lake homes,
            patios, docks, and fire pit spaces with durable materials and a
            cleaner finished look.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
            >
              <Icon name="check" className="mb-4 h-6 w-6" />

              <h3 className="mb-3 text-xl font-bold">
                {detail.title}
              </h3>

              <p className="leading-relaxed text-stone-600">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}