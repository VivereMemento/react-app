// actions
const SELECT_INIT = 'SELECT::INIT';
export const selectInit = (payload = {}) => ({ type: SELECT_INIT, payload });

// reducers
const initialState = { name: '', isActive: false };
const select = (state = initialState, { type, payload }) => (
	type === SELECT_INIT ? { ...state, ...payload } : state
);
// selecotrs
export const getSelect = state => state.select;

export default select;
