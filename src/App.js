import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Views/Home";
import LeaderBoard from "./Views/LeaderBoard";
import NewQuestion from "./Views/NewQuestion";
import Login from "./Views/Login";
import LoadingBar from "react-redux-loading";
import {createBrowserHistory} from 'history'
import ProtectedRoute from "./components/ProtectedRoute";
import {connect} from "react-redux";
import {handleUsersData} from "./actions/users";
import QuestionView from "./Views/QuestionView";
import PageNotFound from "./Views/PageNotFound";
import {Switch} from 'react-router-dom';

const history = createBrowserHistory()


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleUsersData())
    }

    render() {
        const {authedUser} = this.props;
        return (

            <Router history={history}>
                <Nav/>
                <LoadingBar/>

                <Switch>
                    <ProtectedRoute path="/" exact component={Home} authedUser={authedUser}/>
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path="/questions/add" component={NewQuestion} authedUser={authedUser}/>
                    <ProtectedRoute path="/leaderboard" component={LeaderBoard} authedUser={authedUser}/>
                    <ProtectedRoute path="/question/:id" component={QuestionView} authedUser={authedUser}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Router>
        )
    }
}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(App)
