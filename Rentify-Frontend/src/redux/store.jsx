import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: userSlice.reducer,
});
export default store;
