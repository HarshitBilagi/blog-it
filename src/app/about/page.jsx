import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <div className={styles.divMargin}>
          <h2>About Agency</h2>
        </div>
        <div className={styles.divMargin}>
          <h1>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
        </div>
        <div className={styles.divMargin}>
          <p>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We're world's
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
        </div>
        <div className={styles.misc}>
          <div className={styles.misc1}>
            <h3>10k+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.misc2}>
            <h3>234k+</h3>
            <p>People reached</p>
          </div>
          <div className={styles.misc2}>
            <h3>5k+</h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
