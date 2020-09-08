import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// components
import Header from './components/headerComponent/header'
// import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import Products from './components/pages/products'
import Music from './components/pages/music'
import Videos from './components/pages/videos'
import ShowDates from './components/pages/showdates'
import Contact from './components/pages/contact'

import './Assets/css/default.min.css';

function App() {
  return (
    <Router>
            <Header/>
    <div className="App">
        <Route exact path='/longbirds' component={Homepage}/>
        <Route exact path='/Music' component={Music}/>
        <Route exact path='/Products' component={Products}/>
        <Route exact path='/Videos' component={Videos}/>
        <Route exact path='/ShowDates' component={ShowDates}/>
        <Route exact path='/Contact' component={Contact}/>
    </div>
    </Router>
  );
}

export default App;
