import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxMulti from "redux-multi";
import { batchedSubscribe } from "redux-batched-subscribe";

import reducers from "./Reducers";

const initialState = {};
const middleware = [thunk, reduxMulti];

export default createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    batchedSubscribe(notify => {
      notify();
    })
  )
);
