import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
const firebase=require('firebase');
class App extends Component
{
  constructor(props)
  {
      super(props)
      this.state={
        phone:null,
      }
  }
  componentDidMount() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier("recaptcha-container",{
        size:'invisible',
      });
  }
  handelChange=(e)=>{
    const {value}=e.target;
    this.setState({
      phone:value,
    })
  }
  handleSubmit=()=>{
    // let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha');
    let number='+91'+this.state.phone;
    let captcha=window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number,captcha)
      .then(function(e){
        let code=prompt("enter OTP");
        e.confirm(code)
          .then(result=>console.log(result.user.getIdToken()))
          .catch(err=>console.log(err))
      })
      .catch(error=>console.log(error))
  }
  
  render()
  {
    return (
      <div className="App">
        <div id="recaptcha"></div>
          <input 
          type="text" 
          onChange={(e)=>this.handelChange(e)}
          />
          <button id="recaptcha-container" onClick={()=>this.handleSubmit()}>submit</button>
      </div>
    );
  }
  
}

export default App;
