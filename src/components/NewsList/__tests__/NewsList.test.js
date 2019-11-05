/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NewsList from '../NewsList';
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
	api.getNews.getState = () => state;
	api.getNews.setState = (newState) => {
		state = { ...state, ...newState };
	};

	return {
		__esModule: true,
		api
	};
});

const setUp = (props = {}) => {
	const component = render(<Provider store={store}><NewsList {...props} debug /></Provider>);
	return component;
};

describe('NewsList', () => {
	let component;

	beforeEach(() => {
		component = setUp();
	});
	
	it('should match to snapshot', () => {
		// then
		expect(component).toMatchSnapshot();
	});

	it('should return state with data value equel to null', () => {
		expect(api.getNews({})[0].data).toBe(null);
	});

	it('should render loader', () => {
		const { getByTestId } = component;
		expect(getByTestId('loading')).toBeTruthy();
	});
});
