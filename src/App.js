import React, { useState } from 'react';
import Header from './Components/Header.js';
import Bottomtabs from './Components/Tabs';
import Infopanel from './Components/Infopanel';
import SimpleAlerts from './Components/Alert';
import { Footer } from './Components/Footer';
import './App.css';
import Nocases from './Components/ThankstoGod';

function App() {
  const screenconfig = useState(0);
  return (
    <div >
      <Header />
      <SimpleAlerts />
      <Nocases/>
      <Infopanel currentscreen={screenconfig[0]} />
      <Bottomtabs screenconfig={screenconfig} />
    <div>
      <Footer />
      </div>
    </div>
  );
}


export default App;
