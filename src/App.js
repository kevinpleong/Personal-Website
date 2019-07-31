import React from 'react';

//This line imports a few utilities from React-Router.
// BrowserRouter TOP MOST component that we add to our application
// Link is a type of component that can change which page we are looking at
//  The Route import is just something we use to move to different web pages.
import Home from './components/Home.js';
import Bio from './components/Bio.js';
import Navbar from './components/Navbar.js';
import Footer from './components/footer-component/Footer.js';
import Programming from './components/Programming.js';
import Travel from './components/travel/Travel.js';
import Resume from './components/Resume.js';
import Art from './components/Art.js';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

  export default class App extends React.Component {
    render() {
      return (
        <div className="container">
      <Router>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/bio" component={Bio}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/programming" component={Programming}/>
        <Route path="/art" component={Art}/>
        <Route path="/travel" component={Travel}/>
        <Footer/>
      </Router>
    </div>);
  } // END OF RENDER
} // END OF App
