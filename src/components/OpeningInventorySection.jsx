export default function OpeningInventorySection() {
  const inventory = [
    "Adirondack Chairs",
    "Dining Sets",
    "Counter Height Seating",
    "Fire Pit & Conversation Sets",
    "Gliders & Benches",
    "Outdoor Tables",
    "Swivel Dining Chairs",
    "Rockers & Lounge Chairs",
    "Coffee Tables & Side Tables",
    "Poly Lumber Color Options",
  ];

  return (
    <section className="bg-stone-100 px-6 py-16 border-y border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            Opening Inventory Arriving Soon
          </p>

          <h2 className="text-4xl font-bold mb-5">
            Preparing for Our First Inventory Arrival
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed">
            Westonka Outdoor Living is currently preparing to receive our
            opening inventory of premium HDPE outdoor furniture for Minnesota
            lake homes, patios, docks, decks, and fire pit spaces.
          </p>

          <button
            onClick={() => {
              window.history.pushState({}, "", "/inventory");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="mt-8 rounded-full bg-neutral-900 px-7 py-4 text-lg font-semibold text-white transition hover:bg-neutral-700"
          >
            View Opening Inventory
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inventory.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-stone-200 p-5 shadow-sm font-semibold text-stone-800"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white border border-stone-200 p-8 shadow-sm">
          <p className="text-lg font-semibold mb-3">
            Looking for something specific?
          </p>

          <p className="text-stone-600 leading-relaxed">
            Contact us to ask about upcoming availability, special orders,
            colors, and product configurations before inventory officially
            arrives.
          </p>
        </div>
      </div>
    </section>
  );
}