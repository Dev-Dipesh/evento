import H1 from "@/components/h1";
import SearchForm from "@/components/searchForm";
import Link from "next/link";

const popularCities = [
  "Austin",
  "London",
  "Los Angeles",
  "New York",
  "Paris",
  "San Francisco",
  "Seattle",
  "Tokyo",
];

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browser more than{" "}
        <span className="font-bold italic underline text-accent">10,000</span>{" "}
        events around you
      </p>

      <SearchForm />
      <section className="mt-4 flex gap-x-4 tex-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          {popularCities.map((city) => (
            <Link
              className="underline hover:text-white transition"
              href={`/events/${city}`}
              key={city}
            >
              {city}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
