import type { Metadata } from "next";
import "../../styles/globals.css";
import React from "react";
import Nav from "@/components/shared/Nav";
import Offer from "@/components/shared/Offer";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce Buying and selling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Offer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
