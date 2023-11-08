import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import personReducer from "../features/person/personSlice";
import { getDefaultSettings } from "http2";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default configureStore({
  reducer: {
    person: personReducer,
  },
  middleware: customizedMiddleware,
});
