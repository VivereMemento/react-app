/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import checkPropTypes from 'check-prop-types';

export const setComponentWithProvider = (store, Component, props = {}) => {
	const component = render(<Provider store={store}><Component {...props} debug /></Provider>);
	return component;
};

export const setComponent = (Component, props = {}) => {
	const component = render(<Component {...props} debug />);
	return component;
};

export const findByDataAttr = (component, attr) => {
	const wrapper = component.find(`[data-test]=${attr}`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErr;
};
