/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CountBtn } from '../Counter';
import { checkProps } from '../../../helpers/tests';

const mockHandleClick = jest.fn();
const setUp = (props = {}) => {
	const component = render(<CountBtn {...props} debug />);
	return component;
};

describe('CountBtn', () => {
	let component;
	const incProps = { id: 'inc', title: 'Inc', handleClick: mockHandleClick };

	beforeEach(() => {
		component = setUp(incProps);
	});
	
	describe('should render correctly', () => {
		it('should match to snapshot', () => {
			expect(component).toMatchSnapshot();
		});

		it('should not throw a proptypes warning', () => {
			const expectedPropTyes = {
				id: 'test id',
				title: 'test title',
				handleClick: () => 'test function'
			};

			const propsErr = checkProps(CountBtn, expectedPropTyes);

			expect(propsErr).toBeUndefined();
		});
	});

	describe('when clicking the button', () => {
		beforeEach(() => {
			const { getByTestId } = component;
			fireEvent.click(getByTestId('inc'));
		});

		it('should invoks mockHandleClick once', () => {
			expect(mockHandleClick).toHaveBeenCalledTimes(1);
		});
	});
});
