const standardColors = [
  { name: "Black", image: "/colors/black.png" },
  { name: "Tudor Brown", image: "/colors/tudor-brown.png" },
  { name: "Weatherwood", image: "/colors/weatherwood.png" },
  { name: "Dark Gray", image: "/colors/dark-gray.png" },
  { name: "Light Gray", image: "/colors/light-gray.png" },
  { name: "Turf Green", image: "/colors/turf-green.png" },
  { name: "Cherry Wood", image: "/colors/cherry-wood.png" },
  { name: "Cedar", image: "/colors/cedar.png" },
  { name: "Patriot Blue", image: "/colors/patriot-blue.png" },
  { name: "Blue", image: "/colors/blue.png" },
  { name: "Bright White", image: "/colors/bright-white.png" },
  { name: "Bright Red", image: "/colors/bright-red.png" },
  { name: "Aruba Blue", image: "/colors/aruba-blue.png" },
  { name: "Tropical Lime", image: "/colors/tropical-lime.png" },
  { name: "Lemon Yellow", image: "/colors/lemon-yellow.png" },
  { name: "Bright Orange", image: "/colors/bright-orange.png" },
];

const woodgrainColors = [
  { name: "Seashell", image: "/colors/seashell.png", note: "Can be used for base color" },
  { name: "Birchwood", image: "/colors/birchwood.png", note: "Can be used for base color" },
  { name: "Antique Mahogany", image: "/colors/antique-mahogany.png", note: "Can be used for base color" },
  { name: "Brazilian Walnut", image: "/colors/brazilian-walnut.png", note: "Can be used for base color" },
  { name: "Coastal Gray", image: "/colors/coastal-gray.png", note: "Can be used for base color" },
  { name: "Driftwood Gray", image: "/colors/driftwood-gray.png", note: "Can be used for base color" },
  { name: "Marble", image: "/colors/marble.png", note: "Seats and backs only" },
  { name: "Stone", image: "/colors/stone.png", note: "Seats and backs only" },
  { name: "Grabe", image: "/colors/grabe.png", note: "Seats and backs only" },
  { name: "Barnboard", image: "/colors/barnboard.png", note: "Seats and backs only" },
  { name: "Walnut", image: "/colors/walnut.png", note: "Seats and backs only" },
];

function ColorCard({ color }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div
        className="h-24 w-full border-b border-stone-200 bg-cover bg-center"
        style={{
          backgroundImage: color.image
            ? `url(${color.image})`
            : undefined,
          backgroundColor: color.hex || undefined,
        }}
      />

      <div className="px-4 py-4">
        <p className="font-semibold text-stone-900">
          {color.name}
        </p>

        {color.note && (
          <p className="mt-1 text-xs uppercase tracking-wide text-stone-500">
            {color.note}
          </p>
        )}
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
            <h3 className="mb-4 text-2xl font-bold">Standard Colors</h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {standardColors.map((color) => (
                <ColorCard key={color.name} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Woodgrain & Premium Finishes
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {woodgrainColors.map((color) => (
                <ColorCard key={color.name} color={color} textured />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-stone-500">
          Colors are sampled from the provided manufacturer swatch images. Actual
          colors may vary slightly by screen, lighting, and product.
        </p>
      </div>
    </section>
  );
}