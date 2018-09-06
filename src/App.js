
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './utils/Routes';
import './App.css';
import NavbarTop from './components/NavbarTop';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <Switch key="app-switch">
          {Routes.map((route, key) => (
            <Route {...route} key={key} />
          )
          )}
        </Switch>
      </div>
    );
  }
}
export default App;