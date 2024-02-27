"use client";

import styles from "../navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.LinksStyles} ${
        pathname === item.path && styles.activeLinkStyles
      }`}
      key={item.title}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
