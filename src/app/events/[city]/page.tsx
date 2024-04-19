import H1 from "@/components/h1";
import { decodeURIComp, capitalize } from "@/lib/utils";
import { Metadata } from "next";
import EventsList from "./eventsList";
import { Suspense } from "react";
import LoadingCity from "./loading";
import { z } from "zod";

type PageProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = PageProps & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const city = params.city;
  const cityName = capitalize(decodeURIComp(city));

  return {
    title: city === "all" ? "All Events" : `Events in ${cityName}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional(); // Coerce the page number to a positive integer. If the value is not a number, it will be converted to NaN, and if it is a negative number, it will be converted to 0.

export default function EventsPage({ params, searchParams }: EventsPageProps) {
  const cityName = capitalize(decodeURIComp(params.city));
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20] min-h-[110vh]">
      <H1 classes="mb-28">
        {cityName === "All" ? "All Events" : `Events in ${cityName}`}
      </H1>
      <Suspense key={cityName + parsedPage.data} fallback={<LoadingCity />}>
        <EventsList city={cityName} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
