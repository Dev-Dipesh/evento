"use client";

import H1 from "@/components/h1";
import { FieldValues, useForm } from "react-hook-form";

const inputStyles =
  "w-full h-12 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  async function onSubmit(data: FieldValues) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
          {...register("email", { required: "Email is required" })}
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
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
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
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
