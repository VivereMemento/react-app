import { compose, prop } from '../../helpers';

// actions
const APP_INIT = 'APP::INIT';
export const appInit = (payload = {}) => ({ type: APP_INIT, payload });

// reducers
const initialState = {};
const app = (state = initialState, { type, payload }) => (
	type === APP_INIT ? { ...state, ...payload } : state
);
// selecotrs
export const getApp = state => state.app;
export const getAppNews = state => compose(prop('news'), getApp)(state);
export const getAppNewsError = state => compose(prop('error'), getAppNews)(state);
export const getAppArticles = state => compose(prop('articles'), getAppNews)(state);

export default app;
