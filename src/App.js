import React from 'react';
import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Tin from './pages/Tin';
import Layout from './layout';
import TaxEvasionForm from './components/TaxEvasion/TaxEvationForm';
import TaxEvasion from './pages/TaxEvasion';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element = {<Layout/>}>
          <Route path='/' element = {<Home/>} />
          <Route path='/services' element = {<Services/>} />
          <Route path='/Tin' element = {<Tin/>} />
          
            <Route path='/TaxEvasion' element={<TaxEvasion/>} />
          </Route>
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
