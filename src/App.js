import React from 'react';
import './App.css';
import Header from './containers/header'
import RouteComp from "./containers/route";
function App(props) {
  
  return (
    <div className="App">
      <Header />
      <RouteComp />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     open: state.open
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     hideNav: () => dispatch(updateNavigation(false))
//   }
// }
export default App;
