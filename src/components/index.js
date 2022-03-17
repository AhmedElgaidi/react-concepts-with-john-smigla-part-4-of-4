import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './Home';
import About from '../components/About';
import People from './People';
import Error from './Error';
import Person from './Person';

// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route exact path='/about' element={  <About /> } ></Route>
          <Route exact path='/people' element={ <People /> }></Route>
          <Route exact path='/person/:id' element={ <Person /> }></Route>
          <Route path='*' element={ <Error /> }></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default ReactRouterSetup;