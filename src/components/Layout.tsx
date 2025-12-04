import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-tertiary">
      <Header />
      <main className="flex-grow pt-14">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
