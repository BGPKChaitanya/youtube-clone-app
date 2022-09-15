import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import api from "../../common/apis/api";

const initialState = {
  loading: false,
  error: "",
};

export const fetchJwtToken = createAsyncThunk(
  "login/fetchJwtToken",
  async (credentials, { rejectWithValue }) => {
    try {
      const responseFetch = await api.post(
        `/login`,
        JSON.stringify(credentials)
      );
      return responseFetch.data.jwt_token;
    } catch (err) {
      const error = rejectWithValue(err.response.data.error_msg);
      return error;
    }
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchJwtToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJwtToken.fulfilled, (state, action) => {
      Cookies.set("jwt_token", action.payload, { expires: 7 });
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchJwtToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const isLoading = (state) => state.login.loading;
export const errorMsg = (state) => state.login.error;

export default LoginSlice.reducer;
