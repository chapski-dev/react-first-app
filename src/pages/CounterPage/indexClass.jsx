import { Component } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../../common/Counter";


export class CounterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countValue: 0,
		}
	};

	handleIncrement = () => {
		this.setState({countValue: countValue + 1})
	};
	handleDecrement = () => {
		if (this.state.countValue > 0) {
			this.setState((state) => {
				const decrementValue = state.countValue - 1;
				return {
					countValue: decrementValue,
				}
			})
		}
	};
	handleReset = () => {
		this.setState({countValue: 0});
	};

	render() {
		return (
			<div className='counter-page'>  
				<h1>Single Counter Page</h1>
				<Link to={ROUTES.HOME_PAGE}>
						<button className='return-btn'>Get Back</button>
				</Link>
				<Counter 
					countValue={countValue}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
					handleReset={handleReset}
				/>
			</div>
		);
	}
};