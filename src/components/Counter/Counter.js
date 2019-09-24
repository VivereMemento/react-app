import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { countInc, countDec, getCount } from '../../store/reducers/counter';

const Counter = () => {
	const { data } = useSelector(state => ({
		data: getCount(state)
	}));
	const dispatch = useDispatch();
	const incrementCounter = useCallback(
		() => dispatch(countInc(1)),
		[dispatch]
	);
	const decrementCounter = useCallback(
		() => dispatch(countDec(1)),
		[dispatch]
	);

	return (
		<section className='counter'>
			<div className='container'>
				<span>{data.count}</span>
				<CountBtn title='Inc' handleClick={incrementCounter} />
				<CountBtn title='Dec' handleClick={decrementCounter} />
			</div>
		</section>
	);
};

const CountBtn = React.memo(({ title, handleClick }) => (
	<button type='button' onClick={handleClick}>{title}</button>
));

export default Counter;

CountBtn.propTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func
};
