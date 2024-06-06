"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

type Props = {
  children: React.ReactNode;
};

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot-password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: Props) {
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map((link, index) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            className={isActive ? "text-green-600 border p-3" : ""}
            key={index}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
