// ===============================
// app/layout.tsx
// ===============================
import type { Metadata } from "next";
import "./globals.css";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VIET-LAWFIRM | Công ty tư vấn luật chuyên nghiệp",
  description: "VIET-LAWFIRM – Bảo vệ quyền lợi của bạn với đội ngũ luật sư giàu kinh nghiệm.",
  openGraph: {
    title: "VIET-LAWFIRM",
    description: "Dịch vụ tư vấn luật – Bảo vệ quyền lợi của bạn.",
    url: "https://viet-lawfirm.example",
    siteName: "VIET-LAWFIRM",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
