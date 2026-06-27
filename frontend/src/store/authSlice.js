import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: storedUser || null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logoutUser: (state) => {
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
