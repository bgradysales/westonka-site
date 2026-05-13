const standardColors = [
  "Black",
  "Tudor Brown",
  "Weatherwood",
  "Dark Gray",
  "Light Gray",
  "Turf Green",
  "Cherry Wood",
  "Cedar",
  "Patriot Blue",
  "Blue",
  "Bright White",
  "Bright Red",
  "Aruba Blue",
  "Tropical Lime",
  "Lemon Yellow",
  "Bright Orange",
];

const woodgrainColors = [
  "Seashell",
  "Birchwood",
  "Antique Mahogany",
  "Brazilian Walnut",
  "Coastal Gray",
  "Driftwood Gray",
  "Marble",
  "Stone",
  "Grabe",
  "Barnboard",
  "Walnut",
];

function ColorPill({ name }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm">
      <p className="font-semibold text-stone-900">{name}</p>
    </div>
  );
}

export default function ColorOptions() {
  return (
    <section id="colors" className="bg-stone-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            Color Options
          </p>

          <h2 className="mb-5 text-4xl font-bold">
            Choose From Durable Poly Furniture Colors
          </h2>

          <p className="text-lg leading-relaxed text-stone-600">
            Select from classic solid colors and premium woodgrain-style finishes
            to create the right look for your patio, deck, dock, fire pit area,
            or Lake Minnetonka home.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Standard Colors
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {standardColors.map((color) => (
                <ColorPill key={color} name={color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Woodgrain & Premium Finishes
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {woodgrainColors.map((color) => (
                <ColorPill key={color} name={color} />
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Some premium finishes may only be available for seats and backs,
              while others can be used as base colors. Availability may vary by
              product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}