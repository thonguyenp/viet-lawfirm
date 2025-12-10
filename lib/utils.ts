import { ContactFormData } from "@/types";

export const saveContactSubmission = (data: ContactFormData) => {
  if (typeof window === "undefined") return;

  const existing = localStorage.getItem("contact_submissions");
  const parsed: ContactFormData[] = existing ? JSON.parse(existing) : [];

  parsed.push(data);
  localStorage.setItem("contact_submissions", JSON.stringify(parsed));
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};
