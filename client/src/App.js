import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route>
          <Route exact path="/" Component={Home} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
