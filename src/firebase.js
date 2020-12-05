import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD_A2-eLXU00rzQW2tjF77GEH6eOnFrp5o",
  authDomain: "nodejs-sms-sever.firebaseapp.com",
  databaseURL: "https://nodejs-sms-sever.firebaseio.com",
  projectId: "nodejs-sms-sever",
  storageBucket: "nodejs-sms-sever.appspot.com",
  messagingSenderId: "799403877899",
  appId: "1:799403877899:web:5ac2c1683100ffea61890e",
  measurementId: "G-ZYC9REDPBJ",
  
};
firebase.initializeApp(config);
  export default firebase
