"use client";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function postCard() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.top}>
        <Image
          className={styles.postCardImage}
          src="https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={400}
        />
        <p className={styles.date}>date</p>
      </div>
      <div className={styles.bottom}>
        <h2>Title</h2>
        <p>Desc.</p>
        <Link className={styles.linkStyles} href="">
          Read More...
        </Link>
      </div>
    </div>
  );
}
