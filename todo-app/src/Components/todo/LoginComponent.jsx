import React, {useState} from 'react';
import AuthenticationService from './AuthenticationService.js';
//import ShowInvalidCredentials from './ShowInvalidCredentials';
//import ShowLoginSuccessMessage from './ShowLoginSuccessMessage';

const LoginComponent = (props) => {

    const initialState = {
        username : "Void",
        password : "",
        showSuccessMessage : false,
        hasLoginFailed : false,
    }
    const[state, setState] = useState(initialState);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setState((preVal)=>{ 
           return{
                ...preVal,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                [name] : value
             } 
        })
        //console.log(state);
    };
    
     const loginClicked = () => {
        if( state.username==='Void' && state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(state.username, state.password);
            console.log('Successful Login')
            props.history.push(`/welcome/${state.username}`)
            //setState((preVal) => {
             //   return{
            //        ...preVal,
                    
                    //showSuccessMessage: true,
                    //hasLoginFailed: false
            //    }
            //});
        }
        else{
            console.log('Login Failed');
            setState((preVal) => {
                return{
                    ...preVal,
                    showSuccessMessage: false,
                    hasLoginFailed: true
                }
            });
            
        }
            
    };

    return (
        <div>
            <h2>Authenticate Yourself</h2>
            <br />
            <div className="container">
                {/*<ShowInvalidCredentials hasLoginFailed={state.hasLoginFailed} />*/}
                {state.showSuccessMessage && <div><h3>Successfully Logged In</h3></div>}
                {state.hasLoginFailed && <div className="alert alert-warning"><h3>Invalid Credentials</h3></div>}
                {/*<ShowLoginSuccessMessage showSuccessMessage={state.showSuccessMessage} />*/}
                
                User Name : <input type = "text" 
                                name = "username"
                                value = {state.username}
                                onChange = {handleChange} 
                            />
                Password : <input type = "password" 
                                name = "password" 
                                value = {state.password}
                                onChange = {handleChange}
                            />
                &emsp;
                <button className="btn btn-success btn-sm" onClick={loginClicked}>  Login  </button>
            </div>
        </div>
    )
}

export default LoginComponent;
