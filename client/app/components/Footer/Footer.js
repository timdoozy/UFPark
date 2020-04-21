import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <hr />
    <div id="footerWrapper">
      <div id="currentLocationButton">
        <img src="/assets/img/icons8-location-50.png" />
      </div>
      <div id="listViewButton">
        <nav>
          <Link to="/helloworld">
            <img src="/assets/img/icons8-list-50.png" />
          </Link>
        </nav>
      </div>
      <div id="settingsButton">
        <nav>
          <img src="/assets/img/icons8-settings-50.png" />
        </nav>
          
      </div>
    </div>
  </footer>
);

export default Footer;
