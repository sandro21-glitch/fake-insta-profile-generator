import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface SinglePostType {
  id: string;
  img: string;
  postType: string;
}

export interface PostsTypes {
  posts: SinglePostType[];
  postsModal: boolean;
}

const initialState: PostsTypes = {
  posts: [],
  postsModal: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    openPostsModal: (state) => {
      state.postsModal = true;
    },
    closePostsModal: (state) => {
      state.postsModal = false;
    },
    addNewPost: (
      state,
      action: PayloadAction<{ postImage: string; postType: string }>
    ) => {
      const { postImage, postType } = action.payload;
      const newPost = {
        id: uuidv4(),
        img: postImage,
        postType: postType,
      };
      if (postType === "pin") {
        state.posts.unshift(newPost);
      }
      state.posts.push(newPost);
    },
    removePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
});

export const { openPostsModal, closePostsModal, addNewPost, removePost } =
  postsSlice.actions;

export default postsSlice.reducer;
