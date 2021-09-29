import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavDropdownItem extends Component {
    render() {
        const {text, link} = this.props;
        return (
            <li><a className="dropdown-item" href={link}>{text}</a></li>

        );
    }
}

NavMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default NavMenuItem;