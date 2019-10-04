import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appInit, getAppArticles, getAppNewsError } from '../../store/reducers/app';
import { api } from '../../store/api';

const NewsList = () => {
	const [news] = api.getNews({});
	const dispatch = useDispatch();
	const articleList = useSelector(getAppArticles);
	const articleListError = useSelector(getAppNewsError);

	useEffect(() => {
		const articles = news?.data?.articles;
		const error = news?.data?.error;
		dispatch(appInit({ news: { articles, error } }));
	}, [news, dispatch]);

	return (
		<ul className='news-list'>
			{ news.isLoading ? <div>Loading...</div>
			: news.isError ? <div>Error {articleListError}</div>
			: Array.isArray(articleList) && articleList.map(({ title }, index) => <li key={index} className='news-list__item'>{ title }</li>)
			}
		</ul>
	);
};

export default NewsList;
