import React, { Component } from 'react';
//import the components needed for routing
import "react-router";
//to import react-router-dom we need react-router first
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TaskApp from './components/TaskApp';
import CounterApp from './components/CounterApp';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Navigation menu - appends to the end of our url - just like a tags*/}
          <ul className="navheader">
            <li className="nav"><Link className="linkclass" to="/taskapp">ToDoList</Link></li>
            <li className="nav"><Link className="linkclass" to="/counterapp">CounterApp</Link></li>
          </ul>
          {/* Routing */}
          <Route exact path="/taskapp" component={TaskApp} />
          <Route path="/counterapp" component={CounterApp} />

        </div >
      </BrowserRouter >
    );
  }
}

export default App;
