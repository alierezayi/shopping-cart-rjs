import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast as sonner } from "sonner";
import { ToastType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toast({ type, title, desc }: ToastType) {
  sonner[type as "success" | "error"](title, {
    description: desc,
    descriptionClassName: type === "error" ? "text-rose-600" : "",
    action: {
      label: type === "error" ? "OK" : "Undo",
      onClick: () => console.log(type === "error" ? "OK" : "Undo"),
    },
  });
}
