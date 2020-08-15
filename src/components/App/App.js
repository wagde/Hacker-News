import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import List from '../List';
import  NavbarComp  from '../Nav';

function App() {
  return (
    <div className="app-cont">
      
        <Router>
        <Redirect to="/newstories" />
          <NavbarComp/>
          <Switch>
            <Route key="top-stories" exact path='/topstories' component={List} />
            <Route key="new-stories" exact path='/newstories' component={List} />
            <Route key="best-stories" exact path='/beststories' component={List} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
