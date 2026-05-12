import { motion } from "framer-motion";

const businessInfo = {
  phone: "612-562-9933",
  phoneHref: "tel:+16125629933",
  address: "2361 Wilshire Blvd, Mound, MN 55364",
  hours: "By appointment / seasonal showroom hours",
  mapQuery: "2361 Wilshire Blvd Mound MN 55364",
};

const productCollections = [
  {
    title: "Dining Sets",
    description: "Outdoor dining sets near Lake Minnetonka built from durable HDPE poly lumber.",
    image: "https://dutchboypoly.com/wp-content/uploads/2023/07/Stone-on-Slate-44x72-Counter-Table-Set-6-Swivel-Rollback-Chairs-2-scaled.jpg",
  },
  {
    title: "Round Table Sets",
    description: "Round patio table sets perfect for Minnesota outdoor spaces and lake homes.",
    image: "https://dutchboypoly.com/wp-content/uploads/2023/05/1-5-scaled.jpg",
  },
  {
    title: "Bar & Counter Sets",
    description: "Counter height outdoor furniture ideal for decks, docks, and patios.",
    image: "https://dutchboypoly.com/wp-content/uploads/2023/05/1-4-scaled-e1685976284555.jpg",
  },
  {
    title: "Gliders & Benches",
    description: "Comfortable outdoor gliders and benches built for Minnesota weather.",
    image: "https://dutchboypoly.com/wp-content/uploads/2026/04/DBP-AGB4FT-4ft-Adirondack-Glider-Coastal-Gray-on-Black-e1775845125524-1-600x500.jpg",
  },
  {
    title: "Conversation Seating",
    description: "Fire pit seating and outdoor lounge furniture for patios and lakefront homes.",
    image: "https://dutchboypoly.com/wp-content/uploads/2026/04/DBP-AGBCHC5FT-5ft-Adirondack-Counter-Glider-Console-Coastal-Gray-on-Black-e1775844809332-1-600x500.jpg",
  },
];

const serviceAreas = [
  "Mound",
  "Minnetrista",
  "Spring Park",
  "Orono",
  "Wayzata",
  "Excelsior",
  "Shorewood",
  "Deephaven",
  "Victoria",
  "Waconia",
];

const seoPages = [
  {
    eyebrow: "Lake Minnetonka Outdoor Furniture",
    title: "Outdoor Furniture Lake Minnetonka",
    description:
      "Shop premium outdoor furniture for Lake Minnetonka homes, cabins, decks, docks, patios, and lakeside entertaining spaces. Our HDPE poly furniture is built for Minnesota weather and designed for long-term comfort.",
    bullets: ["Dining sets for lake homes", "Adirondack and lounge seating", "Counter-height deck furniture", "Fire pit and conversation seating"],
  },
  {
    eyebrow: "Minnesota Poly Furniture",
    title: "HDPE Poly Furniture Minnesota",
    description:
      "If you want outdoor furniture that can handle snow, rain, sun, humidity, and seasonal temperature swings, HDPE poly furniture is one of the best low-maintenance choices for Minnesota homeowners.",
    bullets: ["No staining or painting", "Resistant to rot and splintering", "Easy to clean", "Great for patios, docks, porches, and decks"],
  },
  {
    eyebrow: "Local Patio Furniture Store",
    title: "Patio Furniture Near Me",
    description:
      "Westonka Outdoor Living serves customers searching for patio furniture near Lake Minnetonka and the western Twin Cities. We help homeowners choose durable outdoor furniture for the way they actually use their space.",
    bullets: ["Local product guidance", "Color and layout help", "Quote-based ordering", "Built for Minnesota outdoor living"],
  },
];

// Lightweight smoke tests for the data that powers the page. These avoid external test dependencies
// and help catch accidental edits that would break the page content.
const smokeTests = [
  {
    name: "businessInfo has a phone label and tel link",
    pass: businessInfo.phone.length > 0 && businessInfo.phoneHref.startsWith("tel:"),
  },
  {
    name: "product collections all have titles, descriptions, and images",
    pass: productCollections.every((item) => item.title && item.description && item.image.startsWith("https://")),
  },
  {
    name: "local SEO pages include the three intended search targets",
    pass:
      seoPages.some((page) => page.title === "Outdoor Furniture Lake Minnetonka") &&
      seoPages.some((page) => page.title === "HDPE Poly Furniture Minnesota") &&
      seoPages.some((page) => page.title === "Patio Furniture Near Me"),
  },
];

smokeTests.forEach((test) => {
  if (!test.pass) {
    console.warn(`Westonka Outdoor Living smoke test failed: ${test.name}`);
  }
});

function Icon({ name, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L9 10.72a16 16 0 0 0 4.28 4.28l1.29-1.29a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  if (name === "map-pin") {
    return (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }

  if (name === "navigation") {
    return (
      <svg {...commonProps}>
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-stone-700">
      <Icon name="check" className="h-5 w-5 shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const base = "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 disabled:opacity-50";
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-700",
    outline: "border border-stone-300 bg-white text-neutral-900 hover:bg-stone-100",
  };
  const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    lg: "h-12 px-7 py-3 text-base",
  };

  return (
    <button className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export default function WestonkaOutdoorLiving() {
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.mapQuery)}`;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      {/* SEO Meta (for real deployment) */}
      {/*
        <title>Outdoor Furniture Near Lake Minnetonka | Westonka Outdoor Living</title>
        <meta name="description" content="Shop premium HDPE outdoor furniture near Lake Minnetonka. Durable patio, deck, and dock furniture built for Minnesota weather." />

        Recommended SEO pages/slugs:
        /outdoor-furniture-lake-minnetonka
        /hdpe-poly-furniture-minnesota
        /patio-furniture-near-me
      */}

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold tracking-tight">Westonka Outdoor Living</p>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Outdoor Furniture • Lake Minnetonka Area</p>
          </div>
          <nav className="hidden lg:flex gap-7 text-sm font-medium text-stone-700">
            <a href="#collections">Outdoor Furniture</a>
            <a href="#why-poly">Why HDPE</a>
            <a href="#seo-pages">Local Pages</a>
            <a href="#location">Location</a>
            <a href="#quote">Request Quote</a>
          </nav>
          <a href={businessInfo.phoneHref}>
            <Button className="rounded-full">Call Now</Button>
          </a>
        </div>
      </header>

      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <img
          src="https://dutchboypoly.com/wp-content/uploads/2023/07/Stone-on-Slate-44x72-Counter-Table-Set-6-Swivel-Rollback-Chairs-2-scaled.jpg"
          alt="Outdoor furniture near Lake Minnetonka patio dining set"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-6 w-full"
        >
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-200">Premium HDPE poly outdoor furniture</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Outdoor Furniture Near Lake Minnetonka</h1>
            <p className="text-lg md:text-xl text-stone-100 mb-8">
              Premium HDPE poly patio furniture designed for Minnesota weather. Perfect for decks, patios, docks, and lake homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#collections">
                <Button size="lg" className="rounded-full">Shop Outdoor Furniture</Button>
              </a>
              <a href="#quote">
                <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white border-white hover:bg-white hover:text-neutral-900">Get a Quote</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="why-poly" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">Made for local conditions</p>
            <h2 className="text-4xl font-bold mb-6">Why Choose HDPE Outdoor Furniture in Minnesota?</h2>
            <p className="text-lg text-stone-600 mb-8">
              Our outdoor furniture is built specifically for harsh Minnesota climates. From snow and ice to sun and humidity, HDPE poly furniture will not crack, rot, splinter, or require painting.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Low maintenance", "Weather resistant", "Great for lake homes", "Comfortable and durable"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                  <Icon name="check" className="h-5 w-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://dutchboypoly.com/wp-content/uploads/2023/05/1-5-scaled.jpg"
            alt="HDPE poly outdoor furniture Minnesota round table set"
            className="rounded-3xl shadow-xl object-cover h-[460px] w-full"
          />
        </div>
      </section>

      <section id="collections" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">Product offerings</p>
              <h2 className="text-4xl font-bold">Outdoor Furniture Collections</h2>
            </div>
            <p className="max-w-xl text-stone-600">
              Browse durable patio furniture, dock furniture, deck furniture, dining sets, gliders, benches, and conversation seating for Minnesota outdoor living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {productCollections.map((item) => (
              <Card key={item.title} className="overflow-hidden rounded-3xl shadow-md border-stone-200">
                <img src={item.image} alt={item.title + " outdoor furniture Minnesota"} className="h-64 w-full object-cover bg-stone-100" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-stone-600 mb-5">{item.description}</p>
                  <Button variant="outline" className="rounded-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="seo-pages" className="py-20 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">Local SEO landing pages</p>
            <h2 className="text-4xl font-bold mb-5">Shop Outdoor Furniture by Local Search</h2>
            <p className="text-lg text-stone-600">
              These sections are written so they can become dedicated SEO pages when the site is launched.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-7">
            {seoPages.map((page) => (
              <Card key={page.title} className="rounded-3xl shadow-md border-stone-200 h-full">
                <CardContent className="p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">{page.eyebrow}</p>
                  <h3 className="text-3xl font-bold mb-4">{page.title}</h3>
                  <p className="text-stone-600 mb-6">{page.description}</p>
                  <ul className="space-y-3 mb-7">
                    {page.bullets.map((bullet) => (
                      <CheckItem key={bullet}>{bullet}</CheckItem>
                    ))}
                  </ul>
                  <Button variant="outline" className="rounded-full">View Page</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">Visit or contact us</p>
            <h2 className="text-4xl font-bold mb-6">Outdoor Furniture in the Lake Minnetonka Area</h2>
            <p className="text-lg text-stone-600 mb-8">
              Westonka Outdoor Living proudly serves homeowners in the Lake Minnetonka area, including Minnetrista, Mound, Spring Park, Orono, Wayzata, Excelsior, Shorewood, and surrounding Minnesota communities.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Card className="rounded-2xl border-stone-200">
                <CardContent className="p-5">
                  <Icon name="phone" className="h-6 w-6 mb-3" />
                  <p className="text-sm text-stone-500 mb-1">Phone</p>
                  <a href={businessInfo.phoneHref} className="font-semibold">{businessInfo.phone}</a>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-stone-200">
                <CardContent className="p-5">
                  <Icon name="map-pin" className="h-6 w-6 mb-3" />
                  <p className="text-sm text-stone-500 mb-1">Location</p>
                  <p className="font-semibold">{businessInfo.address}</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-stone-200">
                <CardContent className="p-5">
                  <Icon name="clock" className="h-6 w-6 mb-3" />
                  <p className="text-sm text-stone-500 mb-1">Hours</p>
                  <p className="font-semibold">{businessInfo.hours}</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((city) => (
                  <span key={city} className="rounded-full bg-stone-100 border border-stone-200 px-4 py-2 text-sm font-medium">{city}</span>
                ))}
              </div>
            </div>
          </div>

          <Card className="rounded-3xl overflow-hidden shadow-lg border-stone-200 min-h-[520px]">
            <div className="h-full flex flex-col bg-stone-100">
              <div className="relative flex-1 min-h-[420px] overflow-hidden bg-gradient-to-br from-stone-200 via-stone-100 to-white">
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute left-1/4 top-0 h-full w-4 rotate-12 bg-white" />
                  <div className="absolute left-2/3 top-0 h-full w-3 -rotate-12 bg-white" />
                  <div className="absolute top-1/3 left-0 h-3 w-full rotate-3 bg-white" />
                  <div className="absolute top-2/3 left-0 h-4 w-full -rotate-2 bg-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div className="rounded-3xl bg-white/90 p-8 shadow-xl border border-stone-200 max-w-md">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white">
                      <Icon name="map-pin" className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Westonka Outdoor Living</h3>
                    <p className="text-stone-600 mb-1">{businessInfo.address}</p>
                    <p className="text-stone-500 text-sm">Serving Mound and the Lake Minnetonka area</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-stone-50 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Serving the Lake Minnetonka area</p>
                  <p className="text-sm text-stone-500">Visit us in Mound or contact us to schedule a consultation.</p>
                </div>
                <a href={directionsHref} target="_blank" rel="noreferrer">
                  <Button className="rounded-full gap-2">
                    <Icon name="navigation" className="h-4 w-4" /> Directions
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="quote" className="py-20 px-6 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-300 mb-3">Custom orders available</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get a Quote on Outdoor Furniture</h2>
          <p className="text-lg text-stone-300 mb-8">Tell us about your space and we’ll help you choose the right setup for your patio, deck, dock, or lake home.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#location">
              <Button size="lg" className="rounded-full px-10">Request a Quote</Button>
            </a>
            <a href={businessInfo.phoneHref}>
              <Button size="lg" variant="outline" className="rounded-full px-10 bg-white/10 text-white border-white hover:bg-white hover:text-neutral-900">Call {businessInfo.phone}</Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white border-t border-stone-200 text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between text-sm">
          <p>© {new Date().getFullYear()} Westonka Outdoor Living</p>
          <p>Outdoor Furniture Near Lake Minnetonka, Minnesota • {businessInfo.phone}</p>
        </div>
      </footer>
    </div>
  );
}
