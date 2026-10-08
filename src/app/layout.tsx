import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextQ — Digital Finance",
  description: "Redefining the Next Era of Digital Finance",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    ><body className="min-h-full flex flex-col bg-[#040807] text-white overflow-x-hidden">
      {/* <body className="min-h-full flex flex-col bg-[#050B0A] text-white"> */}
        {children}
      </body>
    </html>
  );
}
// import type { Metadata } from "next";
// import {
//   Geist,
//   Geist_Mono,
//   Inter_Tight,
//   Instrument_Serif,
// } from "next/font/google";
// import "./globals.css";
// import { Metadata } from "next";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const sans = Inter_Tight({
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

// const serif = Instrument_Serif({
//   variable: "--font-serif",
//   subsets: ["latin"],
//   weight: "400",
//   style: "italic",
// });

// export const metadata: Metadata = {
//   title: "NextQ — Digital Finance",
//   description: "Redefining the Next Era of Digital Finance",
// };

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} ${sans.variable} ${serif.variable} h-full antialiased dark`}
//     >
//       <body className="min-h-full flex flex-col bg-[#040807] font-[family-name:var(--font-sans)] text-white overflow-x-hidden">
//         {children}
//       </body>
//     </html>
//   );
// }