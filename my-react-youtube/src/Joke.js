import React from 'react';

function Joke(props){
    return(
        <div>
            <h3 style = {{display : props.question ? "block" : "none",
                color : !props.answer && "#888888"}}>Question : {props.question}</h3>
            <h3 style = {{color : !props.answer && "#888888"}}>Answer : {props.answer}</h3>
            <hr></hr>
        </div>
    )
}

export default Joke;