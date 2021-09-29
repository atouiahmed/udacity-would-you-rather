import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Views/Home";
import LeaderBoard from "./Views/LeaderBoard";
import NewQuestion from "./Views/NewQuestion";
import Login from "./Views/Login";

function App() {
    return (
        <Router>
            <Nav/>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/questions/add" component={NewQuestion}/>
                <Route path="/leaderboard" component={LeaderBoard}/>
            </div>
        </Router>
    );
}

export default App;
