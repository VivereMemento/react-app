import React from 'react';
import checkPropTypes from 'check-prop-types';

export const setUp = (props = {}, fn) => (Component) => {
	const component = fn(<Component {...props} debug />);
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
