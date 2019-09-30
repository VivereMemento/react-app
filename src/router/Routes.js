import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsList from '../components/NewsList/NewsList';

const Routes = () => (
	<Switch>
		<Route path='/' render={() => <NewsList />} />
	</Switch>
);

export default Routes;
