import React from 'react';

const CounterActions = ({ onIncrement, onDecrement }) => (
	<div>
		<button type="button" onClick={onIncrement}>
			Increment
		</button>
		<button
			type="button"
			onClick={onDecrement} //можно привязать контекст .bind(this), но это очень плохо, будет тормозить приложение
		>
			Decrement
		</button>
	</div>
);

export default CounterActions;
