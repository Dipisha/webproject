var firebaseConfig = {
    apiKey: "AIzaSyABb9KUGHxDaqtKrQ9OpmERCCVO_l-IyDw",
    authDomain: "uchhospital-d8fcb.firebaseapp.com",
    projectId: "uchhospital-d8fcb",
    storageBucket: "uchhospital-d8fcb.appspot.com",
    messagingSenderId: "123961062939",
    appId: "1:123961062939:web:ef40237916b4c825532abe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref('register');
  messagesRef.once("value", function(snapshot){
  var data=snapshot.val();
  for(let i in data){
  console.log(data[i]);
  }
  })
