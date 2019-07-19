import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login'
import Header from './containers/header'
import Dashboard from './containers/dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>  
        <Switch> 
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
