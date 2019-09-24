import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/app';
import counter from './reducers/counter';

const store = createStore(
	combineReducers({
		app,
		counter
	}),
	composeWithDevTools(applyMiddleware())
);

export default store;
