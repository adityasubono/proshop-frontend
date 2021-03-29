import React, {Fragment, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Alert from "./component/layout/Alert";
import { loadUser } from "./actions/auth";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/routing/PrivateRoute";


//Redux
import { Provider } from "react-redux";
import store from './store';
import setAuthToken from "./utils/setAuthToken";

if(localStorage.token) {
    setAuthToken(localStorage.token);
}


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);



    return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Navbar/>
                <Route exact path='/' component={Landing}/>
                <section className='container'>
                    <Alert/>
                    <Switch>
                        <Route exact path={'/register'} component={Register}/>
                        <Route exact path={'/login'} component={Login}/>
                        <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>
)};





export default App;
