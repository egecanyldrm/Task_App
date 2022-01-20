import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Components/Home';
import Create from '../Components/Create';
import Navbar from '../Components/Navbar';
import TaskDetail from '../Components/TaskDetail';
const AppRouter = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/tasks/:id" component={TaskDetail} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default AppRouter

