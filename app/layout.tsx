import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Công Ty Luật Việt Minh – Công ty Luật hàng đầu Việt Nam",
  description:
    "Công Ty Luật Việt Minh cung cấp dịch vụ pháp lý chuyên nghiệp: tư vấn doanh nghiệp, đầu tư, hợp đồng, tranh tụng, sở hữu trí tuệ.",
  keywords: [
    "luật sư",
    "công ty luật",
    "tư vấn pháp lý",
    "Công Ty Luật Việt Minh",
    "dịch vụ pháp lý",
  ],
  openGraph: {
    title: "Công Ty Luật Việt Minh",
    description:
      "Dịch vụ pháp lý chuyên nghiệp – Tận tâm – Bảo mật – Hiệu quả",
    url: "https://vietlawfirm.vn",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        width: 1200,
        height: 630,
        alt: "Law Firm",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
