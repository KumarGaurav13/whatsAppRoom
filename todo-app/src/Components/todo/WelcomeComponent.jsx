import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { executeHelloWorldService, executeHelloWorldBeanService, executeHelloWorldPathVariableService } from '../../api/todo/HelloWorldService'

const WelcomeComponent = (props) => {

    const initialState = {
        message : ''
    }
    const[state, setState] = useState(initialState);
    const handleSuccessfulResponse = (response) =>{
       // const{name, value} = response.data;
        setState({
            message : response.data.message
        
          //  [name] : value
        });
    }

    const isRetrieved = () =>{
        //console.log("isRetrieved clicked");

        //Normal

        //executeHelloWorldService()
        //.then(response => handleSuccessfulResponse(response))
        //.catch()

        //JSON Called
        //executeHelloWorldBeanService()
        //.then(response => handleSuccessfulResponse(response))
        //.catch()

        //Path Variable Bean
        executeHelloWorldPathVariableService(props.match.params.name)
        .then(response => handleSuccessfulResponse(response))
        //.catch()

    }
    return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
            </div>
            <div className="container">
                Click here to get a customized welcome message. &emsp;
                <button onClick={ isRetrieved } className="btn btn-primary">Get Welcome Message</button>
            </div>
            <div className="container">
                <h2>{ state.message }</h2>
            </div>
        </>
    )
}

export default WelcomeComponent;
