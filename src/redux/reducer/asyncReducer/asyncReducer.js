import { ASYNC_START, ASYNC_FINISH, ASYNC_ERROR } from "../../type/asyncType";

const initialState = {
	loading: false,
	error: null,
};

export default function asyncReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ASYNC_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ASYNC_FINISH:
			return {
				...state,
				loading: false,
				error: null,
			};
		case ASYNC_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
}
