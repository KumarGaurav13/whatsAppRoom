import React, { useState } from 'react';
import './Counter.css';
import propTypes from 'prop-types'

const CounterButton = (props) => {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + props.by);
        props.incrementMethod(props.by);
    }

    const decrement = () => {
        setCount(count - props.by);
        props.decrementMethod(props.by);
    }


    return (
        <div className="counter">
            <button className="b" onClick={ increment }> + {props.by} </button>
            <span className="bt"><button className="b" onClick={ decrement }> - {props.by} </button></span>
            {/*<span className="count"> {count} </span>*/}
        </div>
    )
}
CounterButton.defaultProps = {
    by : 1,
}

CounterButton.propTypes = {
    by : propTypes.number,
}

export default CounterButton
