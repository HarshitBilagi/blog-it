"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import Link from "next/link";

export const metadata = {
  title: "Blog-it Conatct page",
  description: "Contact page for Blog-it app built with Next.js and MongoDB",
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" width={500} height={500} alt=""></Image>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Email address"
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Phone number (optional)"
          />
          <textarea
            className={styles.textarea}
            name=""
            placeholder="Message"
            cols="30"
            rows="5"
          ></textarea>
          <button className={styles.sendButton}>Send</button>
        </form>
      </div>
    </main>
  );
}
