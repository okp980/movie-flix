import {
	LISTEN_TO_CURRENT_USER,
	SIGN_IN_USER,
	SIGN_OUT_USER,
} from "../../type/authType";

const initialState = {
	authenticated: false,
	currentUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SIGN_IN_USER:
			return {
				...state,
				authenticated: true,
				currentUser: payload,
			};
		case SIGN_OUT_USER:
			return {
				...state,
				authenticated: false,
				currentUser: null,
			};
		case LISTEN_TO_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			return state;
	}
};

export default authReducer;
