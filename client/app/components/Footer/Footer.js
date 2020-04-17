import React, { useState } from 'react';

// TODO Import Icons that don't exist yet
//import { ReactComponent as LocationIcon } from './icons/location.svg';
//import { ReactComponent as ListIcon } from './icons/list.svg';
//import { ReactComponent as MapIcon } from './icons/map.svg';
//import { ReactComponent as SettingsIcon } from './icons/settings.svg';

/* FOOTER OVERVIEW:
<Get Location Button> <Toggle List/Map View> <Settings Pull-up Menu>
*/


function Footer() {
  return (
    <Footbar>
      <FootItem icon="1" />
      <FootItem icon="2" />
      <FootItem icon="3" />
    </Footbar>
  );
}

function Footbar(props) {
  return (
    <nav className="footbar">
      <ul className="footbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function FootItem(props) {
  return (
    <li className="foot-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}


export default Footer;

