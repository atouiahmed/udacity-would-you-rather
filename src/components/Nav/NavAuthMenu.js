import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavAuthMenu extends Component {
    render() {
        return (
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
                <li className="nav-item dropdown ms-5">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://i.pravatar.cc/150?u=123" alt="" width="30" height="30"
                             className="d-inline-block align-text-top rounded-circle me-2"/>
                        <span className="mt-5 mr-3 mt-4">Hello , Ahmed atoui</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

NavAuthMenu.propTypes = {};

export default NavAuthMenu;