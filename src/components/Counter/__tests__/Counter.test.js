/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Counter from '../Counter';

const setUp = (props = {}) => {
	const component = render(<Provider store={store}><Counter {...props} debug /></Provider>);
	return component;
};

describe('Counter', () => {
	let component;

	beforeEach(() => {
		component = setUp();
	});
	
	describe('should render correctly', () => {
		it('should match to snapshot', () => {
			// then
			expect(component).toMatchSnapshot();
		});
		
		it('should display count from state', () => {
			// then
			const { getByTestId } = component;
			expect(getByTestId('count').textContent).toBe('Count is 0');
		});
	});

	describe('when clicking the #inc button', () => {
		beforeEach(() => {
			const { getByTestId } = component;
			fireEvent.click(getByTestId('inc'));
		});

		it('should show incremented value of count', () => {
			const { getByTestId } = component;
			expect(getByTestId('count').textContent).toBe('Count is 1');
		});
	});
});
