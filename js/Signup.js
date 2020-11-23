

var firebaseConfig = {
  apiKey: "AIzaSyBPIrziljsPZrg40EUPY8y79BkiSJpFwM4",
  authDomain: "server-1-0-0.firebaseapp.com",
  databaseURL: "https://server-1-0-0.firebaseio.com",
  projectId: "server-1-0-0",
  storageBucket: "server-1-0-0.appspot.com",
  messagingSenderId: "90869535296",
  appId: "1:90869535296:web:23fab0861e50308d3205a5",
  measurementId: "G-EGL6KNJN8S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("Start...");

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("click the submit")
  var email = " email@gmail.com";
  var psw = "aiken";
firebase.auth().createUserWithEmailAndPassword(email,psw).then(user=>{
  console.log("success");

}).catch(error=>{
  console.log(error.code);
  console.log(error.message);
});


});