import { SET_MESSAGE, ERROR } from "./types";

const dispatcher = (type, payload, callback) => callback({ type, payload });

export const setMessage = newMessage => dispatch =>
  dispatcher(SET_MESSAGE, newMessage, dispatch);

export const setError = newError => dispatch =>
  dispatcher(ERROR, newError, dispatch);
