import React from 'react';


function Header(props) {

  return (
    <div>
     ---HEADER---
        {props.siteName}
        {props.version}
        {props.company}
        {props.menu}

        <hr/>

        <ul>
        {props.menu.map(el => <li>{el}</li>)}
        </ul>

        <hr/>

    </div>
  );
}

export default Header;
