import React from 'react';
import './UserOutput.css';
const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        textAlign: 'center'
    };
    return(
        <div className="inputDiv">
            <input type="text" style={inputStyle}
            onChange={props.changed}
            value={props.currentName}
            />
        </div>
    );
}

export default UserInput;