import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "../../../../lib/data";

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

// const getData = async (slug) => {
//   const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "force-cache"});

//   //if our data changes constantly, its good to set cache to "{cache: 'no-store'} so our data will be fetched freshly every time the page is loaded. "

//   if (!res.ok) {
//     throw new Error("something went wrong.");
//   }
//   return res.json();
// };

const SinglePost = async ({ params }) => {
  const { slug } = params;

  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} alt="" width={300} height={500} />
      </div>
      <div className={styles.textContainer}>
        <h1>{post.title}</h1>
        <div className={styles.AuthorPub}>
          <Image
            className={styles.avatar}
            src="/noavatar.png"
            width={50}
            height={50}
          />
          <PostUser userId={post.userId} />
          <div className={styles.Pub}>
            <h4>Published</h4>
            <p>01.02.2023</p>
          </div>
        </div>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
