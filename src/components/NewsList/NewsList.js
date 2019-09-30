import React from 'react';
import { useSelector } from 'react-redux';
import { getAppArticles } from '../../store/reducers/app';

const NewsList = () => {
	const articles = useSelector(getAppArticles);

	return (
		<ul className='news-list'>
			{ Array.isArray(articles) && articles.map(({ title }, index) => <li key={index} className='news-list__item'>{ title }</li>)}
		</ul>
	);
};

export default NewsList;
