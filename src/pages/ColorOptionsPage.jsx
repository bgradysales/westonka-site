import Header from "../components/Header";
import Footer from "../components/Footer";
import ColorOptions from "../components/ColorOptions";
import { businessInfo } from "../data/businessInfo";

export default function ColorOptionsPage({ navigateTo }) {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <Header navigateTo={navigateTo} />

      <section className="px-6 pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stone-500">
            Poly Furniture Colors
          </p>

          <h1 className="text-5xl font-bold mb-6">
            HDPE Poly Furniture Color Options
          </h1>

          <p className="max-w-3xl text-lg text-stone-600 leading-relaxed">
            Browse available solid colors and premium woodgrain finishes for
            outdoor poly furniture. We can help you choose color combinations
            for chairs, dining sets, gliders, fire pit seating, docks, decks,
            patios, and Lake Minnetonka homes.
          </p>
        </div>
      </section>

      <ColorOptions />

      <Footer text={`Poly Furniture Colors • ${businessInfo.phone}`} />
    </div>
  );
}