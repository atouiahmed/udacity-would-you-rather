import React, {Component} from 'react'
import NavWrapper from "./NavWrapper";
import NavMenu from "./NavMenu";
import NavAuthMenu from "./NavAuthMenu";

export default class Nav extends Component {

    render() {
        return (
            <NavWrapper>
                <NavMenu/>
                <NavAuthMenu/>
            </NavWrapper>

        );
    }
}