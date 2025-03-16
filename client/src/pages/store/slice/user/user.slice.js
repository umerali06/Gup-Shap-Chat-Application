import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    Login: () => {
      console.log("Heloo login");
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUserThunk.pending, () => {
      console.log("pending");
    });
    builder.addCase(loginUserThunk.fulfilled, () => {
      console.log("fullfilled");
    });
    builder.addCase(loginUserThunk.rejected, () => {
      console.log("rejected");
    });
  },
});

// Action creators are generated for each case reducer function
export const { Login } = userSlice.actions;

export default userSlice.reducer;
