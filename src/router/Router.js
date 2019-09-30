import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AsideContent from '../components/AsideContent/AsideContent';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import PageLayout from '../components/PageLayout/PageLayout';
import { appInit } from '../store/reducers/app';
import { api } from '../store/api';

const Router = () => {
	const [news] = api.getNews({});
	const dispatch = useDispatch();

	useEffect(() => {
		const articles = news?.data?.articles;
		const error = news?.data?.error;
		dispatch(appInit({ news: { articles, error } }));
	}, [news, dispatch]);

	return (
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
};

export default Router;
