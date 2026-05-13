const standardColors = [
  { name: "Black", hex: "#111111" },
  { name: "Tudor Brown", hex: "#5B3524" },
  { name: "Weatherwood", hex: "#8B8067" },
  { name: "Dark Gray", hex: "#4B5552" },
  { name: "Light Gray", hex: "#A9A5A0" },
  { name: "Turf Green", hex: "#244D3B" },
  { name: "Cherry Wood", hex: "#7F2E2E" },
  { name: "Cedar", hex: "#A95E32" },
  { name: "Patriot Blue", hex: "#0F2F4F" },
  { name: "Blue", hex: "#2563A8" },
  { name: "Bright White", hex: "#F8F8F8" },
  { name: "Bright Red", hex: "#D71920" },
  { name: "Aruba Blue", hex: "#1AA6A6" },
  { name: "Tropical Lime", hex: "#7FAE4E" },
  { name: "Lemon Yellow", hex: "#F4C542" },
  { name: "Bright Orange", hex: "#F97316" },
];

const woodgrainColors = [
  { name: "Seashell", hex: "#D8C6A8" },
  { name: "Birchwood", hex: "#C9B997" },
  { name: "Antique Mahogany", hex: "#7B3F22" },
  { name: "Brazilian Walnut", hex: "#3B241B" },
  { name: "Coastal Gray", hex: "#5F5F5A" },
  { name: "Driftwood Gray", hex: "#8B8A84" },
  { name: "Marble", hex: "#E5E5E0" },
  { name: "Stone", hex: "#9A9A92" },
  { name: "Grabe", hex: "#4B5550" },
  { name: "Barnboard", hex: "#5B5A45" },
  { name: "Walnut", hex: "#6B3F2A" },
];

function ColorPill({ color }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div
        className="h-20 w-full border-b border-stone-200"
        style={{ backgroundColor: color.hex }}
      />

      <div className="px-4 py-3">
        <p className="font-semibold text-stone-900">{color.name}</p>
      </div>
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

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Standard Colors
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {standardColors.map((color) => (
                <ColorPill key={color.name} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Woodgrain & Premium Finishes
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {woodgrainColors.map((color) => (
                <ColorPill key={color.name} color={color} />
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