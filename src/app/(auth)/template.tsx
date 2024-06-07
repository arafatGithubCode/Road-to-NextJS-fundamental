"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

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
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link, index) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <>
            <Link
              className={isActive ? "text-green-600 border" : "mx-5"}
              key={index}
              href={link.href}
            >
              {link.name}
            </Link>
          </>
        );
      })}
      {children}
    </div>
  );
}
