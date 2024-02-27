"use client";
import styles from "../navbar.module.css";
import "../../../app/globals.css";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Links() {
  const Links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.LinksContainer}>
        {Links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {Links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
