import { createSlice } from "@reduxjs/toolkit";

const surfPosts = createSlice({
  name: "surfPosts",
  initialState: {
    items: [],
    error: null
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload
    },
    setItems: (store, action) => {
      store.items = action.payload;
    },
    addPost: (store, action) => {
      store.items.push(action.payload);
    }
  }
});

export default surfPosts