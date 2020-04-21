import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Settings from '../Settings/Settings';
import MapView from '../Map/MapView';

const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />

    <Settings />

    <MapView />
  </>
);

export default App;
