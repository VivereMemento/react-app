import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AsideContent from '../components/AsideContent/AsideContent';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import PageLayout from '../components/PageLayout/PageLayout';
import RandomNum from '../components/RandomNum/RandomNum';
import createResource from '../suspense/suspenseApi';

const resource = createResource();

const Router = () => (
	<BrowserRouter basename='/'>
		<PageLayout
			header={
				<HeaderContent />
			}
			aside={
				<AsideContent />
			}
			main={(
				<div>
					<Suspense fallback={<h1>Suspense loading...</h1>}>
						<RandomNum resource={resource} />
					</Suspense>
					<Routes />
				</div>
			)}
		/>
	</BrowserRouter>
);

export default Router;
