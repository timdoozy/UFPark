import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Settings from '../Settings/Settings';
import MapView from '../Map/MapView';
import ListView from '../ListView/ListView';
const App = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer/>

    <Settings />
  </>
);

export default App;
