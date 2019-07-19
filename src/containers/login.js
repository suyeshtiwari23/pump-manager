import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const LoginWrapper = Styled.div`
  background: #ccc;
  padding: 50px;
  width: 30%;
  margin: auto;
`
const LoginHeader = Styled.div`
  color: #000000;
`
class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleClick (e) {
  console.log(e)
  console.log(this.state)
 }
render() {
    return (
      <div>
        <Link to={'/dashboard'} className="nav-link">Contact</Link>
        <MuiThemeProvider>
          
          <LoginWrapper>
          <LoginHeader>
            Login
          </LoginHeader>
          {/* <AppBar
             title="Login"
           /> */}
           <div><TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             /></div>
             <div><TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               /></div>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </LoginWrapper>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;