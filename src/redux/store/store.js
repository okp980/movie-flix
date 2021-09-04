import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { verifyAuth } from "../action/authAction";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(verifyAuth());

export default store;
