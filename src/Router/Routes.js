import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '../components/Counter/Counter';

const Routes = () => (
	<Switch>
		<Route path='/' render={() => <Counter />} />
	</Switch>
);

export default Routes;
