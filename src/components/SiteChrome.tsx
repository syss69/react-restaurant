"use client";

import { usePathname } from "next/navigation";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
