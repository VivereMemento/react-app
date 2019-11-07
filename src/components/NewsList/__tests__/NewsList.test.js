/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import { cleanup } from '@testing-library/react';
import NewsList from '../NewsList';
import { setComponentWithProvider } from '../../../helpers/tests';
import store from '../../../store/store';
import { api } from '../../../store/api';

jest.mock('../../../store/api', () => {
	let state = {
		data: null,
		isLoading: true,
		isError: false
	};

	const api = {
		getNews: jest.fn(() => [state])
	};
	api.getState = () => state;
	api.setState = (newState) => {
		state = { ...state, ...newState };
	};

	return {
		__esModule: true,
		api
	};
});

describe('NewsList', () => {
	let component;

	beforeEach(() => {
		component = setComponentWithProvider(store, NewsList);
	});

	it('should match to snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should return state with data value equel to null', () => {
		expect(api.getNews({})[0].data).toBe(null);
	});

	
	it('should render loader', () => {
		const { getByTestId } = component;
		expect(getByTestId('loading')).toBeTruthy();
	});

	it('should render newslist and its items', () => {
		const news = {
			sources: [
				{ category: 'music', language: 'ua', country: 'Ukraine' },
				{ category: 'science', language: 'ua', country: 'Ukraine' }
			],
			error: false
		};

		api.setState({
			data: news,
			isError: false,
			isLoading: false
		});

		cleanup();
		const { getByTestId, queryAllByTestId } = setComponentWithProvider(store, NewsList);

		expect(getByTestId('newslist')).toBeTruthy();
		expect(queryAllByTestId('newslistitem').length).toBe(news.sources.length);
	});
});
