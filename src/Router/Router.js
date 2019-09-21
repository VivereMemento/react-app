import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import FooterContent from '../components/FooterContent/FooterContent';
import PageLayout from '../components/PageLayout/PageLayout';

const Router = () => (
	<BrowserRouter basename='/'>
		<PageLayout
			header={
				<HeaderContent />
			}
			main={
				<Routes />
			}
			footer={
				<FooterContent />
			}
		/>
	</BrowserRouter>
);

export default Router;
