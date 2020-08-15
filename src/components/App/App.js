import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from '../List'
// or less ideally
import  NavbarComp  from '../Nav';

function App() {
  return (
    <div className="app-cont">
        <Router>
          <NavbarComp/>
          <Switch>
            <Route exact path='/' component={List} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
