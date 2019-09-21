import React, {
	useContext, useRef, useState, useEffect, useCallback
} from 'react';
  
export const ReduxContext = React.createContext(null);
export const { Provider, Consumer } = ReduxContext;

const toggle = value => !value;
const stateItSelf = state => state;

const DISPATCHED_INITIAL_STATE = false;

export function useReduxState(selector = stateItSelf, ...selectorArgs) {
	const store = useContext(ReduxContext);

	// to mark calculating stages:
	//   dispatchedRef.current === dispatched -- hook is called from Component render
	//   otherwize -- hook is called from store listener
	// using Boolean as minimal type to handle stages
	const dispatchedRef = useRef(DISPATCHED_INITIAL_STATE);
	const [dispatched, setDispatched] = useState(DISPATCHED_INITIAL_STATE);

	// these refs are needed to prevent re-subscribtion on redux state changed
	// when at least on of state, selector or selectorArgs is changed.
	const drvStateRef = useRef();
	const selectorRef = useRef();
	const selectorArgsRef = useRef();

	useEffect(
		// subscribing on the store.dispatch
		// yes, Redux call listners after each dispatch nevertheless
		// if global state is changed or not
		() => store.subscribe(() => {
			const newState = selectorRef.current(
				store.getState(), ...selectorArgsRef.current
			);

			if (Object.is(newState, drvStateRef.current)) {
				return; // state is not changed
			}

			drvStateRef.current = newState;
			setDispatched(toggle);
		}),
		[store, setDispatched]
	);

	selectorRef.current = selector;
	selectorArgsRef.current = selectorArgs;

	if (dispatched === dispatchedRef.current) { // (re-)render stage
		// yes it is called on each render.
		// Let's hope the selector is memorized
		drvStateRef.current = selector(store.getState(), ...selectorArgs);
	} else { // after dispatched stage
		dispatchedRef.current = dispatched;
	}

	return drvStateRef.current;
}

export function useReduxAction(actionCreator, deps) {
	const store = useContext(ReduxContext);

	return useCallback(
		(...args) => store.dispatch(
			actionCreator(...args)
		), deps // eslint-disable-line react-hooks/exhaustive-deps
	);
}
