import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appInit, getAppNewsSource, getAppNewsError } from '../../store/reducers/app';
import { api } from '../../store/api';

const NewsList = () => {
	const [news] = api.getNews({});
	const dispatch = useDispatch();
	const newsSources = useSelector(getAppNewsSource);
	const articleListError = useSelector(getAppNewsError);

	useEffect(() => {
		const sources = news?.data?.sources;
		const error = news?.data?.error;

		dispatch(
			appInit({
				news: {
					sources,
					filters: {
						category: ['music'],
						language: ['en'],
						country: ['au']
					},
					error
				}
			})
		);
	}, [news, dispatch]);

	if (news.isLoading) {
		return <div data-testid='loading'>Loading...</div>;
	}

	if (news.isError) {
		return <div>Error {articleListError}</div>;
	}

	return (
		<ul data-testid='newslist' className='news-list'>
			{
				Array.isArray(newsSources) && newsSources.map((
					{ category, language, country },
					index
				) => <li data-testid='newslistitem' key={index} className='news-list__item'>{ `${category} ${language}, ${country}` }</li>)
			}
		</ul>
	);
};

export default NewsList;
