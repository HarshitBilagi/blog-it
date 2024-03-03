"use client";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function postCard({ post }) {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.top}>
        <Image
          className={styles.postCardImage}
          src={post.img}
          alt=""
          width={300}
          height={400}
        />
        <div className={styles.date}>
          <p>{post.date.toString().slice(4, 16)}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>{post.title}</h2>
        {/* <p>{post.desc}</p> */}
        <Link className={styles.linkStyles} href={`/blog/${post.slug}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
}
