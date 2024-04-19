"use client";

import H1 from "@/components/h1";
import { SignUpSchema, SignupFormType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const inputStyles =
  "w-full h-12 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignupFormType>({
    resolver: zodResolver(SignUpSchema),
  });

  async function onSubmit(data: SignupFormType) {
    // Send data to the server
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) return console.error({ status: response.status });

    const responseData = await response.json();

    if (responseData.errors) {
      const errors = responseData.errors;

      if (errors.email) {
        setError("email", { type: "server", message: errors.email });
      } else if (errors.password) {
        setError("password", { type: "server", message: errors.password });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        console.error({ errors });
      }
    } else {
      alert(`Signup Success - User ID: ${responseData.id}`);
    }

    reset();
  }

  return (
    <main className="flex flex-col h-[75vh] justify-center items-center gap-20">
      <H1>EVENTO</H1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-80 items-center"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className={inputStyles}
        />
        {errors.email && (
          <p className="text-red-500 bg-red-100 px-4 py-2 rounded-lg w-full">
            {`${errors.email.message}`}
          </p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={inputStyles}
        />
        {errors.password && (
          <p className="text-red-500 bg-red-100 px-4 py-2 rounded-lg w-full">
            {`${errors.password.message}`}
          </p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className={inputStyles}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 bg-red-100 px-4 py-2 rounded-lg w-full">
            {`${errors.confirmPassword.message}`}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-lg bg-accent px-6 text-gray-950 transition hover:bg-accent/90 focus:ring-2 focus:ring-accent/50 focus:bg-accent/90 disabled:bg-accent/[25%] disabled:cursor-not-allowed disabled:text-gray-50"
        >
          {!isSubmitting ? "Sign Up" : "Signing Up..."}
        </button>
      </form>
    </main>
  );
}
