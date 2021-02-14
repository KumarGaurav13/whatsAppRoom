import React, { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';
const Counter = (props) => {

    const [count, setCount] = useState(0);
    const increment = (by) => {
        setCount(count + by);
       // console.log("Parent Class");
    }
    const decrement = (by) => {
        setCount(count - by);
       // console.log("Parent Class");
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div >
            
                <CounterButton incrementMethod = { increment } decrementMethod= {decrement} />
                <CounterButton by= {5} incrementMethod = { increment } decrementMethod= {decrement} />
                <CounterButton by= {10} incrementMethod = { increment } decrementMethod= {decrement} />
                <CounterButton by= {50} incrementMethod = { increment } decrementMethod= {decrement} />
                <span className="count">{count}</span>
            
                <div>
                    <button className="reset" onClick = {reset}>Reset</button>
                </div>
            
        </div>
    )
}

export default Counter;
