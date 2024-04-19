import "server-only";
import { EventoEvent } from "@prisma/client";
import { unstable_cache } from "next/cache";
import prisma from "./db";
import { capitalize } from "./utils";

export const getEvent = unstable_cache(
  async (slug: string): Promise<EventoEvent | null> => {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug,
      },
    });

    return event;
  }
);

type TGetEvents = (
  city: string,
  page?: number
) => Promise<{
  events: EventoEvent[];
  totalCount: number;
}>;

export const getEvents: TGetEvents = unstable_cache(async (city, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "All" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "All") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city,
      },
    });
  }

  return {
    events,
    totalCount,
  };
});
