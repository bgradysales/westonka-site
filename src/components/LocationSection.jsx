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

        <p className="text-sm text-stone-500 mb-1">
          {label}
        </p>

        {href ? (
          <a href={href}>{content}</a>
        ) : (
          <p>{content}</p>
        )}
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

        <Card className="rounded-3xl overflow-hidden shadow-lg border-stone-200 min-h-[520px]">
          <div className="h-full flex flex-col bg-stone-100">

            <div className="relative flex-1 min-h-[420px] overflow-hidden bg-gradient-to-br from-stone-200 via-stone-100 to-white">

              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="rounded-3xl bg-white/90 p-8 shadow-xl border border-stone-200 max-w-md">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Icon name="map-pin" className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Westonka Outdoor Living
                  </h3>

                  <p className="text-stone-600 mb-1">
                    {businessInfo.address}
                  </p>

                  <p className="text-stone-500 text-sm">
                    Serving the Lake Minnetonka area
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-stone-50 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">
                  Serving the Lake Minnetonka area
                </p>

                <p className="text-sm text-stone-500">
                  Visit us in Mound or contact us to schedule a consultation.
                </p>
              </div>

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
          </div>
        </Card>
      </div>
    </section>
  );
}