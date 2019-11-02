export const COUNT_INC = 'COUNT::INC';
export const COUNT_DEC = 'COUNT::DEC';
// actions
export const countInc = payload => ({ type: COUNT_INC, payload });
export const countDec = payload => ({ type: COUNT_DEC, payload });
// reducer
const initialState = { count: 0 };
const counter = (state = initialState, { type, payload }) => (
	type === COUNT_INC		?	{ ...state, count: state.count + payload }
	:	type === COUNT_DEC	? { ...state, count: state.count - payload }
	: state
);
// selectors
export const getCount = state => state.counter;

export default counter;
