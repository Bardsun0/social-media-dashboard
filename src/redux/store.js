import { configureStore } from "@reduxjs/toolkit";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: ["auth/loginSuccess", "auth/registerSuccess"],
  ignoredActionPaths: ["payload.user"],
  ignoredPaths: ["auth.user"],
});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // diğer reducer'lar...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serializableMiddleware),
});
