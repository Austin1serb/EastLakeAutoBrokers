import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Footer from './components/Footer';
import FinanceForm from './components/FinanceForm';




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route>
          <Route exact path="/" Component={Home} />
        </Route>
        <Route exact path='/inventory' Component={Inventory}/>
        <Route exact path='/finance' Component={FinanceForm}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
