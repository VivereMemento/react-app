import { useState, useEffect, useReducer } from 'react';
import { curry } from 'ramda';
const fromJson = obj => obj.json();
const toJson = obj => JSON.stringify(obj);

const FETCH_INIT = 'FETCH::INIT';
const FETCH_SUCCESS = 'FETCH::SUCCESS';
const FETCH_FAILURE = 'FETCH::FAILURE';

const dataReducer = (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_INIT:
			return {
				...state,
				isLoading: true,
				isError: false
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				isError: false,
				data: payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true
			};
		default:
			return state;
	}
};
const useDataApi = (
	initialUrl,
	isImmediateLoading,
	initialData,
	initialParams={method: 'GET'}
) => {
	const [url, setUrl] = useState(initialUrl);
	const [params, setParams] = useState(initialParams)
	const [state, dispatch] = useReducer(dataReducer, {
	  isLoading: isImmediateLoading,
	  isSuccess: false,
	  isError: false,
	  data: initialData,
	});
  
	useEffect(() => {
		let didCancel = false;
	
		const fetchData = async () => {
			dispatch({ type: FETCH_INIT });
			
			try {
				await fetch(url, params)
					.then(res => {
						if (res.ok) {
							return fromJson(res);
						} else {
							throw res
						}
					})
					.then(res => {
						if (!didCancel) {
							dispatch({ type: FETCH_SUCCESS, payload: res });
						}
					});
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: FETCH_FAILURE });
				}
			}
		};
		url && fetchData();
		return () => {
			didCancel = true;
		};
	}, [url]);
  
	return [state, setUrl, setParams];
};
const baseUrl = 'https://stage.bodyfitplan.xyz/api/v1.0';
const setUrl = curry((initialUrl, url) => initialUrl && url ? `${initialUrl}/${url}` : null);
const getData = curry((url, isImmediateLoading, initialData) => useDataApi(setUrl(baseUrl, url), initialData));
const postData = (url, isImmediateLoading) => (params = {}) => {
	const [posting, setUrl, setParams] = useDataApi(null, isImmediateLoading, {}, params);
	const activateSendData = data => {
		setParams({method: 'POST', ...params, body: toJson(data)});
		setUrl(`${baseUrl}/${url}`);
	};
	
	return [
		posting,
		activateSendData
	]
};
const isNotImmediateLoading = false;
const isImmediateLoading = true;
const getQuizeSteps = getData(null, isNotImmediateLoading);

export const api = {
	baseUrl,
	getQuizeSteps,
};

export default useDataApi;
