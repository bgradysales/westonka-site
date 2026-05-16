import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { openingInventory } from "../data/openingInventory";
import { businessInfo } from "../data/businessInfo";

export default function InventoryPage({ navigateTo }) {
  const totalPieces = openingInventory.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Header navigateTo={navigateTo} />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            Opening Inventory
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Opening Inventory Coming Soon
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
            Our first shipment is being prepared and will include approximately{" "}
            <strong>{totalPieces} pieces</strong> of HDPE outdoor furniture for
            Minnesota patios, lake homes, docks, dining spaces, and fire pit
            seating areas.
          </p>

          <p className="mt-5 max-w-3xl text-lg font-semibold text-red-700">
            Opening inventory is already starting to sell before arrival.
            Contact us early if you want to reserve a specific color or piece.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {openingInventory.map((item, index) => (
              <div
                key={`${item.sku}-${item.finish}`}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                {index < 3 && (
                  <div className="mb-4 inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">
                    Sold from Opening Inventory
                  </div>
                )}

                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                  {item.sku}
                </p>

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="mt-3 text-stone-600">
                  Finish: <strong>{item.finish}</strong>
                </p>

                <p className="mt-2 text-stone-600">
                  Quantity arriving: <strong>{item.quantity}</strong>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold">
              Interested in a specific piece?
            </h2>

            <p className="mb-6 text-stone-600">
              Contact us to ask about availability, colors, delivery timing,
              or reserving items from the opening shipment.
            </p>

            <a
              href="/#quote"
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/#quote");
              }}
            >
              <Button className="rounded-full">
                Request Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer text={`Opening Inventory • ${businessInfo.phone}`} />
    </div>
  );
}