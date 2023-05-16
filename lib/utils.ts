import { DateTime } from "@/types/firebase";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (timestamp: DateTime): string => {
  const seconds = timestamp?.seconds || 0;
  const nanoseconds = timestamp?.nanoseconds || 0;
  const milliseconds: number =
    seconds * 1000 + Math.floor(nanoseconds / 1000000);
  const date: Date = new Date(milliseconds);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const utcDateString: string = date.toLocaleString("en-US", options);

  return utcDateString;
};
