import { ASYNC_START, ASYNC_FINISH, ASYNC_ERROR } from "../type/asyncType";

export const asyncStart = () => ({ type: ASYNC_START });
export const asyncFinish = () => ({ type: ASYNC_FINISH });
export const asyncError = (error) => ({ type: ASYNC_ERROR, payload: error });
