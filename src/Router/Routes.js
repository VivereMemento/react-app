import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
	<Switch>
		<Route render={() => (<div className='container'>Main</div>)} />
	</Switch>
);


export default Routes;
