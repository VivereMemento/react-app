import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Aside from '../components/Aside/Aside';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import PageLayout from '../components/PageLayout/PageLayout';
import { appInit } from '../store/reducers/app';
import { api } from '../store/api';

const Router = () => {
	const [news] = api.getNews({});
	const dispatch = useDispatch();

	useEffect(() => {
		const articles = news?.data?.articles;
		articles && dispatch(appInit({ news: articles }));
	}, [news, dispatch]);

	return (
		<BrowserRouter basename='/'>
			<PageLayout
				header={
					<HeaderContent />
				}
				aside={
					<Aside />
				}
				main={
					<Routes />
				}
			/>
		</BrowserRouter>
	);
};

export default Router;
