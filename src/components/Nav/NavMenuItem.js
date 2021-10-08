import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


function NavMenuItem(props) {
    const {text, link, linkProps} = props;
    return (
        <li className="nav-item me-4">
            <NavLink className="nav-link" to={link} activeClassName='active' {...linkProps}>{text}</NavLink>
        </li>

    );
}


NavMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkProps: PropTypes.object,
};

export default NavMenuItem;