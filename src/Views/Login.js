import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";
import {connect} from "react-redux";
import {handleUsersData} from "../actions/shared";

class Login extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        this.props.dispatch(handleUsersData())
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
                        <form className="mt-4">

                            <div className="mt-2">
                                <select className="form-select" name="" id="">
                                    {usersIds.map(u => (
                                        <option key={u} value={u}>{users[u].name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-success mt-2">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </AppWrapper>
        );
    }
}

function mapStateToProps({users}) {

    return {
        users,
        usersIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)