import React, {Component} from 'react';

class NavWrapper extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavWrapper;