import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rushikesh Yeldari | IAM Engineering Lead",
  description: "Engineering Lead specializing in Identity & Access Management, Privileged Access Security, and Cloud Security Architecture. 12+ years experience in infrastructure and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
