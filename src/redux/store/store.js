import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { verifyAuth } from "../action/authAction";

const store = process.env.NODE_ENV === "development" ? createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
) :  createStore(
	rootReducer,
	applyMiddleware(thunk));

store.dispatch(verifyAuth());

export default store;
