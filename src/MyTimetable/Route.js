import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import Login from './Login';
import BottomNav from './bottomNav';
// import AddEvent from "./AddEvent";
import Menu from "./Menu";
import AddEvent1 from "./AddEvent1";
import ApiRead from "./ApiRead";
import Delete from "./deleteMission";
import UpdateMission from "./UpdateMission";





const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/detail" component={BottomNav}/>
            <Route exact path="/newEvent" component={AddEvent1}/>
            <Route exact path="/api" component={ApiRead}/>
            <Route exact path="/delete" component={Delete}/>
            <Route exact path="/update" component={UpdateMission}/>

        </Switch>
    </HashRouter>

);




export default BasicRoute;
