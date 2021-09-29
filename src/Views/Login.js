import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppWrapper from "../components/AppWrapper";

class Login extends Component {
    render() {
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
                                <select className="form-control" name="" id="">
                                    <option value="">one1</option>
                                    <option value="">one2</option>
                                    <option value="">one3</option>
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

export default Login;