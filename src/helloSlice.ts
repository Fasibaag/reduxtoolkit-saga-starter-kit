import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";
import { put, delay } from "redux-saga/effects";

interface HelloState {
  value: number;
  loading: boolean;
}

const initialState: HelloState = {
  value: 0,
  loading: false,
};

export const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    incReq: (state, action) => {
      state.loading = true;
    },
    increment: (state, action) => {
      state.value += action.payload;
      state.loading = false;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      state.loading = false;
    },
  },
});

export const { increment, decrement, incReq } = helloSlice.actions;
export const INCREMENT_REQUEST = "INCREMENT_REQUEST";

export function* incrementAsyncSaga(action: PayloadAction) {
  yield delay(2000);
  yield put(increment(action.payload));
}

export const selectCount = (state: RootState) => state.hello.value;
export const selectLoading = (state: RootState) => state.hello.loading;

export default helloSlice.reducer;
