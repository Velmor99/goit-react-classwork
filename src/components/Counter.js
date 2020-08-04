import React, { Component } from 'react';
import CounterActions from './CounterActions';

export default class Counter extends Component {
	static propTypes = {};

	static defaultProps = {};

	// constructor(...props) {//что бы иметь пропы нужно прокинуть их в конструкторе и в супере
	//     super(props)

	//     this.state = {
	//         value: this.props.initialValue,
	//     }
	// }

	state = {
		//бабел за нас преобразует этот код в конструктор
		value: this.props.initialValue
	};

	// constructor() {
	//     super()
	//     this.handleDecrement = this.handleDecrement.bind(this);//хороший вариант привязки контекста, но есть и лучше, например сразу стрелкой
	// }

	handleDecrement = () => {
		// стрелочная функция под капотом передает контекст и поэтому с ее помощью можно его привязывать
		console.log(this);
		console.log('Decrement!');
		this.setState({
			value: this.state.value - 1
		});
	};

	handleIncrement = () => {
		//this.setState({ value: this.state.value + 1 });

		for (let i = 0; i < 3; i += 1) {
			console.log(this.state.value); //значение state во время вызова функции setState
			this.setState((prevState) => {
				//если нужно что то сделать исходя из предыдущего состояние то делаем это функционально
				console.log(prevState);
				return {
					value: prevState.value + 1
				};
			});
		}
	};

	render() {
		//console.log(this.props); //пропы в классе пишутся через this
		return (
			<div>
				<CounterActions onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
				<span>{this.state.value}</span>
			</div>
		);
	}
}
