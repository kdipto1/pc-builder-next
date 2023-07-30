import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
