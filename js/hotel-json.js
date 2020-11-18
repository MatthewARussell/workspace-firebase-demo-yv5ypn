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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  //save the data to database 
  firebase
    .firestore()
    .collection("Hotel-Information")
    .add(inputJson);



  /* clear the entry */
  $("form")[0].reset();
});
