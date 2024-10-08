"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  const session = useSession();
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.link} href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button onClick={handleSignOut} className={styles.logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
