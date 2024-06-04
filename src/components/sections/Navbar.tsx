"use client";

import { routes } from "@/constans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b md:bodern flex justify-between sticky top-0 py-3 md:py-5 lg:py-8 bg-white/90">
      <Link href="/" className="text-xl md:text-2xl font-semibold">
        Test Synapsis
      </Link>

      <div className="flex gap-5 md:gap-7">
        {routes.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={cn(
              "font-medium md:text-lg ",
              pathname === item.path && "underline underline-offset-8"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
