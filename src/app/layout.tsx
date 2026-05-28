import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "ConTILab | 건설현장 안전관리 플랫폼",
  description: "건설현장의 안전관리, 영상기록, 공정관리를 하나의 플랫폼에서. 4,500개 이상 현장 도입.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="min-h-screen antialiased font-[family-name:var(--font-noto)]">
        {children}
      </body>
    </html>
  );
}
