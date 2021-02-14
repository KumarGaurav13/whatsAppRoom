import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js';
import './bootstrap.css';

const Header = () => {
   const isUserLoggedInFlag = () => {
       return AuthenticationService.isUserLoggedIn();
    };
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://www.youtube.com/watch?v=TIw8ltYPad8&ab_channel=BANGMusic" className="navbar-brand">V@idKiller</a></div>
                <ul className="navbar-nav">
                    { isUserLoggedInFlag && <li><Link className="nav-link" to="/welcome/VoidKiller">Home</Link></li> }
                    { isUserLoggedInFlag && <li><Link className="nav-link" to="/todos">Todos</Link></li> }
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    { !isUserLoggedInFlag && <li><Link className="nav-link" to="/login">Login</Link></li> }
                    { isUserLoggedInFlag && <li><Link className="nav-link" to="/logout" onClick={ AuthenticationService.logout }>Logout</Link></li> }
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Header);
