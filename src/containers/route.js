import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import SwipeableTemporaryDrawer from './components/leftnav'
import {updateNavigation} from '../actions/index'
import Skills from '../containers/skils'
import {connect} from 'react-redux'
import Login from '../containers/login'
import Dashboard from '../containers/dashboard'
import SwipeableTemporaryDrawer from '../components/leftnav'

class Router extends React.PureComponent {
    render(){
        return (
            <BrowserRouter>
                <SwipeableTemporaryDrawer open={this.props.open} hide={this.props.hideNav}/>
                <Switch> 
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/skills' component={Skills} />
                </Switch>
            </BrowserRouter>
        )
    }
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Router);