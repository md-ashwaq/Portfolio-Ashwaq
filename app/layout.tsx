import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Ashwaq | Java Developer Portfolio",
  description: "Building Scalable Enterprise Systems | Full Stack Java Developer specializing in Spring Boot, Cloud Systems, and Backend Architecture",
  keywords: ["Java Developer", "Spring Boot", "Full Stack Developer", "Backend Developer", "Cloud Systems", "MongoDB", "Enterprise Software"],
  authors: [{ name: "Mohammed Ashwaq" }],
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Mohammed Ashwaq | Java Developer Portfolio",
    description: "Building Scalable Enterprise Systems | Full Stack Java Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
