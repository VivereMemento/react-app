import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Router from '../../router/Router';
import '../../style/app.scss';
import store from '../../store/store';

const root = document.querySelector('#root');

const App = () => (
	<Provider store={store}>
		<Router />
	</Provider>
);


ReactDOM.render(
	<App />,
	root
);
