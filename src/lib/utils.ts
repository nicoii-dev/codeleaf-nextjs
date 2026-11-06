import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines clsx and twMerge for Tailwind CSS class names.
 * This allows for merging Tailwind classes while properly handling conditional classes
 * and conflicting utilities.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}