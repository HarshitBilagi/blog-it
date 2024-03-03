import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  noStore();
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  noStore();
    try {
        connectToDB();
        const post = await Post.findOne({slug});
        return post;
      } catch (err) {
        throw new Error("Failed to fetch post!");
      }
};

export const getUser = async (id) => {
  noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
      } catch (err) {
        throw new Error("Failed to fetch user!");
      }
};

export const getUsers = async () => {
  noStore();
    try {
        connectToDB();
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error("Failed to fetch users!");
      }
};

