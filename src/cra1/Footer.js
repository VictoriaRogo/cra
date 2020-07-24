import React from 'react';
import SiteName from "./SiteName";


function Footer(props) {
    return (
        <div className="Header">
            --{props.label} {props.menu} FOOTER <SiteName/>--
        </div>
    )
}

export default Footer;
