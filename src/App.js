import React, { Component } from 'react';
import firebase from './firebase'
export class App extends Component {
  handleClick=()=>{
   const appVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
    );
    const number = '+251932433954';
    firebase.auth().signInWithPhoneNumber(number,appVerifier).then(function(e){
      let code =prompt('enter otp');
      if(code == null) return;
      e.confirm(code).then(function(result){
        console.log(result.user,'user');
        document.querySelector('label').textContent=result.user.phoneNumber + "number verfied "
      }).catch((error)=>{
        console.log(error);
      })
    })
  };
  render() {
    return (
      <div>
        <div id="recaptcha-container"></div>
        <label></label>
        <button
          onClick={this.handleClick}>
          clickHere
        </button>
      </div>
    )
  }
}
export default App