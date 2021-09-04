import { CLOSE_MODAL, OPEN_MODAL } from "../type/modalType";

export const openModal = (modal) => {
	return {
		type: OPEN_MODAL,
		payload: modal,
	};
};

export const closeModal = () => {
	return {
		type: CLOSE_MODAL,
	};
};
