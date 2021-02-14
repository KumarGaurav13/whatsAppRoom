import React from 'react';

const ShowLoginSuccessMessage = (props) => {
    if(props.showSuccessMessage){
        return (
        <div>
            Successfully Logged In
        </div>
        )
    }else
    return null
}

export default ShowLoginSuccessMessage;
