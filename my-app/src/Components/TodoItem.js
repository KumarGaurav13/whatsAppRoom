import React, { useState } from 'react';

const TodoItem = () =>{

    let time = new Date.toString;
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date.toString;
        setCurrentTime(time);
    }

    setInterval(updateTime,1000);

    return(
        <div>
            <h1> {currentTime} </h1>
        </div>
    );
}

export default TodoItem;