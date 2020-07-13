import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Auth from "./Auth";
import Stripe from "./Stripe";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth"
  ]
};

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    auth: Auth,
    stripe: Stripe
  });
};

export default history => persistReducer(persistConfig, rootReducer(history));
