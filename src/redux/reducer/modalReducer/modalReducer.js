import { CLOSE_MODAL, OPEN_MODAL } from "../../type/modalType";

const initialState = null;

const modalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case OPEN_MODAL:
			const { modalType, modalProps } = payload;
			return { modalType, modalProps };
		case CLOSE_MODAL:
			return null;
		default:
			return state;
	}
};

export default modalReducer;
