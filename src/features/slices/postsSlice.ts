import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

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
      state.postsModal = true;
    },
  },
});

export const { openPostsModal, closePostsModal } = postsSlice.actions;

export default postsSlice.reducer;
