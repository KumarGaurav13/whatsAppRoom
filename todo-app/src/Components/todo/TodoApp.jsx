import React from 'react';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import LogoutComponent from './LogoutComponent';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

const TodoApp = () => {
    return (
        <div className="todoApp">
            <Router>
                <Header /><br />
                <Switch>
                    <Route exact path='/' component={ LoginComponent }></Route>
                    <Route path='/login' component={ LoginComponent }></Route>
                    <AuthenticatedRoute path='/welcome/:name' component={ WelcomeComponent } />
                    <AuthenticatedRoute path='/todos' component={ ListTodosComponent } />
                    <AuthenticatedRoute path='/logout' component={ LogoutComponent } />
                    <Route component={ ErrorComponent }></Route>
                </Switch>
                <br /><Footer />
            </Router>
            {/*<LoginComponent />*/}
            {/*<WelcomeComponent />*/}
        </div>
    )
}

export default TodoApp;
