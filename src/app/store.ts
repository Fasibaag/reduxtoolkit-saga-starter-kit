import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import hellorReducer, { incrementAsyncSaga, incReq } from "../helloSlice";
import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";

function* root() {
  yield takeLatest(incReq, incrementAsyncSaga);
}

const sagaM = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    hello: hellorReducer,
  },
  middleware: [sagaM],
});

sagaM.run(root);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
