import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return(
        <div className="UserOutput">
        <p>Username : {props.userName} </p>
        <p>This is my output. It can be overriden</p>        
        </div>
    );
}

export default UserOutput;