import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login'
import Header from './containers/header'
import Dashboard from './containers/dashboard'
import SwipeableTemporaryDrawer from './components/leftnav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateNavigation} from './actions/index'
function App(props) {
  
  return (
    <div className="App">
      <Header />
     <SwipeableTemporaryDrawer open={props.open} hide={props.hideNav}/>
      <BrowserRouter>  
        <Switch> 
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideNav: () => dispatch(updateNavigation(false))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
