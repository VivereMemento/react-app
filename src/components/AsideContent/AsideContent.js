import React from 'react';
import './aside.scss';
import Select from '../Select/Select';

const category = ['business', 'entertainment', 'gaming', 'general', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
const language = ['en', 'de', 'fr'];
const country = ['au', 'de', 'gb', 'in', 'it', 'us'];
const AsideContent = () => (
	<div className='aside__content'>
		<Select title='category' options={category} />
		<Select title='language' options={language} />
		<Select title='country' options={country} />
	</div>
);

export default AsideContent;
