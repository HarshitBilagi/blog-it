import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.homeButtons}>
          <button className={styles.learnMore}>
            Learn More
          </button>
          <button className={styles.contact}>Contact</button>
        </div>
        <Image
          className={styles.brandsImage}
          src="/brands.png"
          alt=""
          width={500}
          height={50}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
}