import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavMenuItem from "./NavMenuItem";

class NavMenu extends Component {
    render() {
        return (
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
                <NavMenuItem link="/" linkProps={{exact: true}} text="Home"/>
                <NavMenuItem link="/questions/add" text="New Question"/>
                <NavMenuItem link="/leaderboard" text="Leader Board"/>

            </ul>
        );
    }
}

NavMenu.propTypes = {};

export default NavMenu;