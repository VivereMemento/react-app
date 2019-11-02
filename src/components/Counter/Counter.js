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
				<span data-testid='count'>{`Count is ${data.count}`}</span>
				<CountBtn id='inc' title='Inc' handleClick={incrementCounter} />
				<CountBtn id='dec' title='Dec' handleClick={decrementCounter} />
			</div>
		</section>
	);
};

export const CountBtn = React.memo(({ id, title, handleClick }) => (
	<button data-testid={id} id={id} type='button' onClick={handleClick}>{title}</button>
));

export default Counter;

CountBtn.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	handleClick: PropTypes.func
};
