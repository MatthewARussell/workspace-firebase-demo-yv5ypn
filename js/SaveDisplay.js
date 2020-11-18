// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {apiKey: "AIzaSyBPIrziljsPZrg40EUPY8y79BkiSJpFwM4",
  authDomain: "server-1-0-0.firebaseapp.com",
  databaseURL: "https://server-1-0-0.firebaseio.com",
  projectId: "server-1-0-0",
  storageBucket: "server-1-0-0.appspot.com",
  messagingSenderId: "90869535296",
  appId: "1:90869535296:web:23fab0861e50308d3205a5",
  measurementId: "G-EGL6KNJN8S"};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  //get the value of th eform using SerializeArray method
  var inputdata = $("form").serializeArray();
  var surveyList = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    surveyList[name] = value;
  }
  firebase
    .firestore()
    .collection("survey-information")
    .add(surveyList);
});
firebase.firestore().collection("survey-information").onSnapshot(function(querySnapshot){
  console.log(querySnapshot.size);
  querySnapshot.forEach(doc =>{
    console.log(doc.data());
  })
});
// update the result in table
