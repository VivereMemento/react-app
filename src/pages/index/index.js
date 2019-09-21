import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Router from '../../Router/Router';
import '../../style/app.scss';
import { Provider } from '../../store/redux-hooks';
import store from '../../store/store';

const root = document.querySelector('#root');

const App = () => {
	useEffect(() => console.log('hello'));
	
	return (
		<Provider value={store}>
			<Router />
		</Provider>
	);
};

ReactDOM.render(
	<App />,
	root
);
