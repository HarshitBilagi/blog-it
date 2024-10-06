import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Want the World to Know About Something? BlogIt.
        </h1>
        <p className={styles.desc}>
        Share your voice with the world—BlogIt now!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Explore!!!</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/Blog.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
