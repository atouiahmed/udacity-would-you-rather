import React, {Component} from 'react';
import AppWrapper from "../components/AppWrapper";
import {connect} from "react-redux";
import {setAuthUser} from "../actions/authedUser";

class Login extends Component {
    state = {
        users: [],
    }


    handleSelectLogin = (e) => {
        let auth_id = e.target.value;
        this.setState({auth_id: auth_id})

    }
    doLogin = (e) => {
        e.preventDefault();
        let {auth_id} = this.state;
        let {default_auth, users} = this.props;
        auth_id = auth_id ? users[auth_id] : default_auth;
        this.props.dispatch(setAuthUser(auth_id));
        this.props.history.push(`/`)
    }

    render() {
        const {usersIds, users} = this.props;
        return (
            <AppWrapper>
                <div className="card">
                    <div className="card-header text-center ">
                        <h3 className="fs-5 mt-2"> Welcome to the Would You Rather App!</h3>
                        <p className="p-0 m-0 my-2">Please sign to continue</p>
                    </div>
                    <div className="card-body">
                        <div className="text-center mt-3">
                            <img className="my-auto" src="logo.jpg" alt="" width="128px"/>
                        </div>
                        <form className="mt-4" onSubmit={this.doLogin}>

                            <div className="mt-2">
                                <select className="form-select" onChange={this.handleSelectLogin}>
                                    {usersIds.map(u => (
                                        <option key={u} value={u}>{users[u].name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-success mt-2">Login
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </AppWrapper>
        );
    }
}

function mapStateToProps({users,authedUser}) {
    let usersIds = Object.keys(users);
    let default_auth = users[usersIds[0]];
    return {
        users,
        usersIds,
        default_auth,
        authedUser
    }
}

export default connect(mapStateToProps)(Login)