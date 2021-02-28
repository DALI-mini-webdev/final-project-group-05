import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
 import TestingInfo from "./components/TestingInfo";
 import Assessment from "./components/Assessment";
 import Home from "./components/Home";
 import OtherResources from "./components/OtherResources";

 class App extends Component {
   render() {
     return (
      <div className="App">
      <Router>
         <Navbar/>
        <Switch>
          <Route path="/Vaccine Information">
            <TestingInfo />
          </Route>
          <Route path="/Symptom List + Self check">
            <Assessment />
          </Route>
          <Route path="/Other Resources">
            <OtherResources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
     </div>
     )
   }
 };

export default App;

