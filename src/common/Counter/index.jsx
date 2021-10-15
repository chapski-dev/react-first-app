import './style.scss';

export const Counter = (props) => {
	return (
    <div>
      <div className="counter-wrapper">
        <button className="remove-btn" onClick={props.handleRemoveCounter}>x</button>
        <div className="count-value">{props.countValue}</div>
          {props.countValue % 2 === 0
          ? <div className='parity-check even'>Number {props.countValue} is even</div>
          : <div className='parity-check even'>Number {props.countValue} is odd</div> 
          }
        <div className="controls">
          <button className="control-btn" onClick={props.handleDecrement}>-</button>
          <button className="control-btn" onClick={props.handleReset}>Reset</button>
          <button className="control-btn" onClick={props.handleIncrement}>+</button>
        </div>
      </div>
		</div>
	);
};

