import styles from "./postUser.module.css";
import { getUser } from "../../../lib/data";

// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "force-cache"});
  
//     //if our data changes constantly, its good to set cache to "{cache: 'no-store'} so our data will be fetched freshly every time the page is loaded. "
  
//     if (!res.ok) {
//       throw new Error("something went wrong.");
//     }
//     return res.json();
//   };

const PostUser = async ({userId}) => {

    // const user = await getData(userId);

    const user = await getUser(userId);


  return (
    <div className={styles.Author}>
      <h4>Author</h4>
      <p>{user.name}</p>
    </div>
  );
};

export default PostUser;
