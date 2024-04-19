"use client";

import { THUMB_IMAGE_API } from "@/lib/constants";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // this will scale the card from 0.8 to 1 when the card is in view
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const date = new Date(event.date);
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <div className="relative flex flex-col w-full h-full bg-white/[3%] rounded-xl overflow-hidden state-effects">
        <Image
          src={`${THUMB_IMAGE_API}${event.slug}`}
          alt={event.name}
          width={500}
          height={280}
          className="w-full h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute left-3 top-3 h-11 w-11 bg-black/50 rounded-md flex flex-col justify-center items-center p-5">
          <p className="text-xl font-bold -mb-1">
            {date.toLocaleDateString("en-us", { day: "2-digit" })}
          </p>
          <p className="text-xs text-accent font-semibold">
            {date.toLocaleDateString("en-us", { month: "short" }).toUpperCase()}
          </p>
        </section>
      </div>
    </MotionLink>
  );
}
