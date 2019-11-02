/* eslint-disable no-undef */
import counterReducer, { COUNT_INC, COUNT_DEC, getCount } from '../counter';

describe('counterReducer', () => {
	describe('when initializing', () => {
		const count = { count: 0 };

		it('should set initial count', () => {
			expect(counterReducer(undefined, {
				type: undefined,
				count
			})).toEqual(count);
		});
	});

	describe('when invoke actions', () => {
		it('should increment count', () => {
			const count = 1;
			const initialState = { count: 3 };
			expect(counterReducer(initialState, {
				type: COUNT_INC,
				payload: count
			})).toEqual({ count: initialState.count + count });
		});
	
		it('should decrement count', () => {
			const count = 1;
			const initialState = { count: 3 };
			expect(counterReducer(initialState, {
				type: COUNT_DEC,
				payload: count
			})).toEqual({ count: initialState.count - count });
		});
	});

	describe('when invoke selectors', () => {
		it('should get counter from state', () => {
			const count = 0;
			const appState = { counter: { count } };
			expect(getCount(appState)).toEqual({ count });
		});
	});
});
