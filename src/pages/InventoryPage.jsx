import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { openingInventory } from "../data/openingInventory";
import { businessInfo } from "../data/businessInfo";

export default function InventoryPage({ navigateTo }) {
  const availablePieces = openingInventory.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Header navigateTo={navigateTo} />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            In Stock Now
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Opening Inventory Has Arrived
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
            Our first shipment of premium HDPE outdoor furniture is now
            available at Westonka Outdoor Living. Browse the colors, styles,
            and quantities currently in stock.
          </p>

          <p className="mt-5 max-w-3xl text-lg font-semibold text-emerald-700">
            Approximately {availablePieces} pieces are currently listed.
            Availability may change as products are reserved or sold.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openingInventory.map((item, index) => {
              const sold = index < 3;

              return (
                <div
                  key={`${item.sku}-${item.finish}`}
                  className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`${item.name} in ${item.finish}`}
                      className={`h-[320px] w-full bg-white object-contain p-5 ${
                        sold ? "opacity-60" : ""
                      }`}
                    />

                    {sold && (
                      <div className="absolute left-4 top-4 rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white shadow-md">
                        Sold
                      </div>
                    )}

                    {!sold && (
                      <div className="absolute left-4 top-4 rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white shadow-md">
                        In Stock
                      </div>
                    )}
                  </div>

                  <div className="border-t border-stone-100 p-6">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                      {item.sku}
                    </p>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-3 text-stone-600">
                      Finish:{" "}
                      <strong className="text-stone-900">
                        {item.finish}
                      </strong>
                    </p>

                    <p className="mt-2 text-stone-600">
                      {sold ? (
                        <strong className="text-red-700">
                          Sold from opening inventory
                        </strong>
                      ) : (
                        <>
                          Quantity available:{" "}
                          <strong className="text-stone-900">
                            {item.quantity}
                          </strong>
                        </>
                      )}
                    </p>

                    {!sold && (
                      <a
                        href="/#quote"
                        onClick={(event) => {
                          event.preventDefault();
                          navigateTo("/#quote");
                        }}
                      >
                        <Button className="mt-5 w-full rounded-full">
                          Ask About This Item
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold">
              Visit or reserve an item
            </h2>

            <p className="mb-6 text-stone-600">
              Contact us to confirm current availability, ask about colors,
              arrange a visit, or reserve a piece before it sells.
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

      <Footer text={`In-Stock Outdoor Furniture • ${businessInfo.phone}`} />
    </div>
  );
}