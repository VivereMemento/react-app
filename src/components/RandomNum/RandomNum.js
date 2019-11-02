import React from 'react';
import PropTypes from 'prop-types';

const RandomNum = ({ resource }) => {
	const n = resource.num.read();
	return <div>your random number is: {n}</div>;
};

export default RandomNum;

RandomNum.propTypes = {
	resource: PropTypes.object
};
