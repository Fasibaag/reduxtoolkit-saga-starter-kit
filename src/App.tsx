import React from "react";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, decrement, selectLoading, incReq } from "./helloSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  return (
    <div className={styles.App}>
      <button onClick={() => dispatch(incReq(2))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
      <div>{count}</div>
      <div>{loading ? "Loading True" : "Loading False"}</div>
    </div>
  );
}

export default App;
