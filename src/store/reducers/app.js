const APP_INIT = 'APP::INIT';

export const appInit = (payload = {}) => ({ type: APP_INIT, payload });


const initialState = {};

const app = (state = initialState, { type, payload }) => (
	type === APP_INIT ? { ...state, ...payload } : state
);

export const getApp = state => state.app;

export default app;
