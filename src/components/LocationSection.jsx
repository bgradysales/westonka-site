import { businessInfo, serviceAreas } from "../data/businessInfo";
import { Card, CardContent } from "./Card";
import Button from "./Button";
import Icon from "./Icon";

function InfoCard({ icon, label, value, href }) {
  const content = <span className="font-semibold">{value}</span>;

  return (
    <Card className="rounded-2xl border-stone-200">
      <CardContent className="p-5">
        <Icon name={icon} className="h-6 w-6 mb-3" />

        <p className="text-sm text-stone-500 mb-1">{label}</p>

        {href ? <a href={href}>{content}</a> : <p>{content}</p>}
      </CardContent>
    </Card>
  );
}

export default function LocationSection() {
  const directionsHref =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      businessInfo.mapQuery
    )}`;

  return (
    <section id="location" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-3">
            Visit or contact us
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Outdoor Furniture in the Lake Minnetonka Area
          </h2>

          <p className="text-lg text-stone-600 mb-8">
            Westonka Outdoor Living proudly serves homeowners
            throughout the Lake Minnetonka area and surrounding
            Minnesota communities.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <InfoCard
              icon="phone"
              label="Phone"
              value={businessInfo.phone}
              href={businessInfo.phoneHref}
            />

            <InfoCard
              icon="map-pin"
              label="Location"
              value={businessInfo.address}
            />

            <InfoCard
              icon="clock"
              label="Hours"
              value={businessInfo.hours}
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Service Areas
          </h3>

          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full bg-stone-100 border border-stone-200 px-4 py-2 text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-xl min-h-[520px] bg-stone-100">
          <iframe
            title="Westonka Outdoor Living Map"
            src="https://www.google.com/maps?q=2361+Wilshire+Blvd+Mound+MN+55364&output=embed"
            width="100%"
            height="100%"
            className="min-h-[520px] w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-6 flex justify-end">
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="rounded-full gap-2">
            <Icon name="navigation" className="h-4 w-4" />
            Directions
          </Button>
        </a>
      </div>
    </section>
  );
}