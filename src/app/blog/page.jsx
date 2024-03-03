import PostCard from "../../components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "../../../lib/data";

export const metadata = {
  title: "Blog-it Blog page",
  description: "Blog page for Blog-it app built with Next.js and MongoDB",
};

// FETCHING USING API CALL
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "force-cache"});

//   //if our data changes constantly, its good to set cache to "{cache: 'no-store'} so our data will be fetched freshly every time the page is loaded. "

//   if (!res.ok) {
//     throw new Error("something went wrong.");
//   }
//   return res.json();
// };

const Blog = async () => {
  // const posts = await getData();

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
