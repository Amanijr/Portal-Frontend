import React from 'react';
import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Contacts from './pages/contacts';
import Layout from './layout';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element = {<Layout/>}>
          <Route path='/' element = {<Home/>} />
          <Route path='/services' element = {<Services/>} />
          <Route path='/contacts' element = {<Contacts/>} />
          </Route>
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
