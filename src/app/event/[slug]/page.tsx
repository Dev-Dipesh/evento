import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { EventoEvent } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type EventPageProps = {
  params: {
    slug: string;
  };
};

type EventType = EventoEvent | null;

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const event = await getEvent(params.slug);

  return {
    title: event ? event.name : "Event not found",
  };
}

type StaticParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<StaticParams[]> {
  // Top 100 Most Popular Events
  return [
    {
      slug: "dj-practice-session",
    },
    {
      slug: "harmony-festival",
    },
    {
      slug: "3d-animation-workshop",
    },
  ];
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEvent(params.slug);

  if (!event) return notFound();

  const date = new Date(event.date);
  // convert date to the following format - Sunday, October 08
  const formattedDate = date.toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  return (
    <main>
      <section className="flex justify-center items-center relative overflow-hidden py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="blur-3xl object-cover z-0"
          alt={`${event.name} - Event Background Image`}
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={true}
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            className="rounded-xl overflow-hidden border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">{formattedDate}</p>
            <H1 classes="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 bg-blur text-lg capitalize mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading2>About this event</SectionHeading2>
          <SectionText>{event.description}</SectionText>
        </Section>
        <Section>
          <SectionHeading2>Location</SectionHeading2>
          <SectionText>{event.location}</SectionText>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl text-center mb-8">{children}</h2>;
}

function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
