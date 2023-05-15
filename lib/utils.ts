import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
