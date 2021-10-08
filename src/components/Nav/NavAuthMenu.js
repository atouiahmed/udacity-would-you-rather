import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {purgeAuthUser} from "../../actions/authedUser";

class NavAuthMenu extends Component {
    componentDidMount() {

    }

    doLogout = () => {
        this.props.dispatch(purgeAuthUser());
        this.props.history.push(`/Login`)
    }

    render() {
        const {authedUser} = this.props;
        // console.log(authedUser)
        return (
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
                {authedUser.id ? (
                    <li className="nav-item dropdown ms-5">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={authedUser.avatarURL} alt="" width="30" height="30"
                                 className="d-inline-block align-text-top rounded-circle me-2"/>
                            <span className="mt-5 mr-3 mt-4">Hello , {authedUser.name}</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#" onClick={this.doLogout}>Logout</a></li>
                        </ul>
                    </li>
                ) : (
                    <li className="nav-item dropdown ms-5">
                        <NavLink className="nav-link" exact to="/Login">
                            <span className="mt-5 mr-3 mt-4">Login</span>
                        </NavLink>
                    </li>
                )}

            </ul>
        );
    }
}

NavAuthMenu.propTypes = {};

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NavAuthMenu));