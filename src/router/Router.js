import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AsideContent from '../components/AsideContent/AsideContent';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import PageLayout from '../components/PageLayout/PageLayout';

const Router = () => (
	<BrowserRouter basename='/'>
		<PageLayout
			header={
				<HeaderContent />
			}
			aside={
				<AsideContent />
			}
			main={
				<Routes />
			}
		/>
	</BrowserRouter>
);

export default Router;
