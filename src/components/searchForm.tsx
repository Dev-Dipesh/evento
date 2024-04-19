"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SearchForm() {
  const router = useRouter();
  const [city, setCity] = useState("");

  const handleOnChangeCity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const city = e.target.value;

    // Check if there are any special characters in the string
    const specialChars = /[!~`@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]/;
    if (specialChars.test(city)) {
      toast.error("Special characters are not allowed", {
        duration: 2000,
      });
      return;
    }

    setCity(city);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (city && city !== "/") {
      router.push(`/events/${city.trim()}`);
    }
  };

  return (
    <>
      <form className="w-full sm:w-[590px]" onSubmit={handleSubmit}>
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search events in any city..."
          value={city}
          spellCheck={false}
          onChange={handleOnChangeCity}
        />
      </form>
      <Toaster />
    </>
  );
}
