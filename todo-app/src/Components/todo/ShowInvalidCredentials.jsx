import React from 'react';

const ShowInvalidCredentials = (props) => {
    if(props.hasLoginFailed){
        return (
            <div>
               Invalid Credentials
            </div>
        )
    }
    else
        return null
}

export default ShowInvalidCredentials;
