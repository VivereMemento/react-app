import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/app';

const store = createStore(
	combineReducers({
		app
	}),
	composeWithDevTools(applyMiddleware())
);

export default store;
