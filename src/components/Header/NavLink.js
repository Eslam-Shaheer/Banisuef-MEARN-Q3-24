"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classses from "./header.module.css";

const NavLink = ({ href, label }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      key={href}
      className={path == href ? classses.active : ""}
    >
      {label}
    </Link>
  );
};

export default NavLink;
