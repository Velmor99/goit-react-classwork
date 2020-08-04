import React, { Component } from 'react';

const Subscription = {
	FREE: 'free',
	'10.99$': 'pro',
	'24.99$': 'premium'
};

export default class SignupForm extends Component {
	static defaultProps = {
		formName: 'This title'
	};

	state = {
		email: '',
		password: '',
		agreed: '',
		subscription: null,
		age: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		console.log('value: ', value);
		console.log('name: ', name);
		this.setState({
			[name]: value
		});
	};

	handleAgeChange = (e) => {
		console.log(e.target.value);
		this.setState({
			age: e.target.value
		});
	};

	handleSubscriptionChange = (e) => {
		this.setState({
			subscription: e.target.value
		});
	};

	handleAgreedChange = (e) => {
		this.setState({
			agreed: e.target.checked
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit!');
	};

	render() {
		const { email, password, agreed, subscription, age } = this.state;
		const { formName } = this.props;
		return (
			// <div>
			//     <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
			// </div> //пример контроллируемого события, "то что у нас в интерфейсе зависит от того что у нас лежит в state, а не наоборот"

			<form onSubmit={this.handleSubmit}>
				<h3>{formName}</h3>
				<label htmlFor="email">Email</label>
				<input type="email" value={email} onChange={this.handleChange} id="email" name="email" />
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" value={password} onChange={this.handleChange} id="password" name="password" />
				<br />
				<div role="group">
					<label>
						<input
							type="radio"
							value={Subscription.FREE}
							checked={Subscription.FREE === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						Free
					</label>
					<label>
						<input
							type="radio"
							value={Subscription['10.99$']}
							checked={Subscription['10.99$'] === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						10.99$
					</label>
					<label>
						<input
							type="radio"
							value={Subscription['24.99$']}
							checked={Subscription['24.99$'] === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						24.99$
					</label>
				</div>
				<br />
				<label>
					Chose your age
					<select name="age" value={age} onChange={this.handleAgeChange}>
						<option value="" disabled>
							...
						</option>
						<option value="18-25">18-25</option>
						<option value="26-35">26-35</option>
						<option value="36+">36+</option>
					</select>
				</label>
				<br />
				<label>
					Соглашаюсь с чем то там
					<input type="checkbox" checked={agreed} onChange={this.handleAgreedChange} />
				</label>
				<br />
				<button type="submit" disabled={!agreed}>
					Зарегистрироваться как {email}
				</button>
			</form>
		);
	}
}
