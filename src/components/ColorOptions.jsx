const standardColors = [
  { name: "Black", hex: "#141414" },
  { name: "Tudor Brown", hex: "#3F2416" },
  { name: "Weatherwood", hex: "#807256" },
  { name: "Dark Gray", hex: "#5F625B" },
  { name: "Light Gray", hex: "#908782" },
  { name: "Turf Green", hex: "#2E4138" },
  { name: "Cherry Wood", hex: "#612727" },
  { name: "Cedar", hex: "#8E5638" },
  { name: "Patriot Blue", hex: "#102432" },
  { name: "Blue", hex: "#235991" },
  { name: "Bright White", hex: "#F7F5F6" },
  { name: "Bright Red", hex: "#CD1E1C" },
  { name: "Aruba Blue", hex: "#1E9896" },
  { name: "Tropical Lime", hex: "#78914C" },
  { name: "Lemon Yellow", hex: "#FDC845" },
  { name: "Bright Orange", hex: "#F66304" },
];

const woodgrainColors = [
  { name: "Seashell", hex: "#DAD1C7", note: "Can be used for base color" },
  { name: "Birchwood", hex: "#D0BDA4", note: "Can be used for base color" },
  { name: "Antique Mahogany", hex: "#71472F", note: "Can be used for base color" },
  { name: "Brazilian Walnut", hex: "#3A2A21", note: "Can be used for base color" },
  { name: "Coastal Gray", hex: "#554A45", note: "Can be used for base color" },
  { name: "Driftwood Gray", hex: "#6F6B68", note: "Can be used for base color" },
  { name: "Marble", hex: "#D6D6D6", note: "Seats and backs only" },
  { name: "Stone", hex: "#919796", note: "Seats and backs only" },
  { name: "Grabe", hex: "#474D4E", note: "Seats and backs only" },
  { name: "Barnboard", hex: "#585A4A", note: "Seats and backs only" },
  { name: "Walnut", hex: "#63493B", note: "Seats and backs only" },
];

function ColorCard({ color, textured = false }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div
        className="h-24 w-full border-b border-stone-200"
        style={{
          backgroundColor: color.hex,
          backgroundImage: textured
            ? `linear-gradient(90deg, rgba(255,255,255,.16), rgba(0,0,0,.12)), repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0px, rgba(255,255,255,.08) 1px, transparent 1px, transparent 5px)`
            : `linear-gradient(135deg, rgba(255,255,255,.14), rgba(0,0,0,.10))`,
        }}
      />

      <div className="px-4 py-4">
        <p className="font-semibold text-stone-900">{color.name}</p>

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