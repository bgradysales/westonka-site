import Button from "./Button";
import { Card, CardContent } from "./Card";

export default function CollectionCard({ item, navigateTo }) {
  return (
    <Card className="overflow-hidden rounded-3xl shadow-md border-stone-200">
      <img
        src={item.image}
        alt={`${item.title} outdoor furniture Minnesota`}
        className="h-64 w-full object-cover bg-stone-100"
      />

      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

        <p className="text-stone-600 mb-5">{item.description}</p>

        <a
          href={item.slug}
          onClick={(event) => {
            event.preventDefault();
            navigateTo(item.slug);
          }}
        >
          <Button variant="outline" className="rounded-full">
            Learn More
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}