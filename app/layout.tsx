import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "посуда для дома",
  description:
    "Керамическая посуда ручной работы: тарелки, кружка и ваза для уютного дома.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full bg-[#f3efe8] font-sans text-[#17251f]">
        {children}
      </body>
    </html>
  );
}
