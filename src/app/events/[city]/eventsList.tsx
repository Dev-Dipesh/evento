import { getEvents } from "@/lib/server-utils";
import EventCard from "./eventCard";
import PaginationControls from "@/components/paginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const currentPage = page === 0 ? 1 : page;
  const { events, totalCount } = await getEvents(city, currentPage);

  const previousPath =
    currentPage > 1 ? `/events/${city}?page=${currentPage - 1}` : "";
  const nextPath =
    totalCount > 6 * currentPage
      ? `/events/${city}?page=${currentPage + 1}`
      : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event: any) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
