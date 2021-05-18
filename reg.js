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


document.getElementById('registerform').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getInputVal('name');
  var city = getInputVal('city');
  var phone = getInputVal('phone');
  var blood = getInputVal('blood');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(name, city, phone, blood, message);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('registerform').reset();
  
}

function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, city, phone,blood, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    city:city,
    phone:phone,
	blood:blood,
    message:message

  });
}