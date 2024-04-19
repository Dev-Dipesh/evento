import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type DefinedClassValue = Exclude<ClassValue, undefined>;

export function cn(...inputs: DefinedClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function is used to decode the URI component. For example, if the city is "Los%20Angeles", it will be decoded to "Los Angeles".
export function decodeURIComp(s: string): string {
  return decodeURIComponent(s);
}

// This function is used to capitalize the first letter of each word in a string. For example, if the input is "new york", the output will be "New York".
export function capitalize(s: string): string {
  return s.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
