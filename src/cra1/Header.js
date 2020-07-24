import React from 'react';
import SiteName from "./SiteName";


function Header(props) {
    return (
        <div className="Header">
            --{props.name} {props.menu} HEADER <SiteName/>--
        </div>
    )
}

export default Header;
