import Image from "next/image";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={500}
        />
      </div>
      <div className={styles.textContainer}>
        <h1>Title</h1>
        <div className={styles.AuthorPub}>
          <Image className={styles.avatar} src="/noavatar.png" width={50} height={50} />
          <div className={styles.Author}>
            <h4>Author</h4>
            <p>Terry Jefferson</p>
          </div>
          <div className={styles.Pub}>
            <h4>Published</h4>
            <p>01.02.2023</p>
          </div>
        </div>
        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </p>
      </div>
    </div>
  );
}
