
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBbGrXTOtfCY6qU5LKo6BUUVdbagryVzMA",
    authDomain: "kwitter-96640.firebaseapp.com",
    databaseURL: "https://kwitter-96640-default-rtdb.firebaseio.com",
    projectId: "kwitter-96640",
    storageBucket: "kwitter-96640.appspot.com",
    messagingSenderId: "722065780462",
    appId: "1:722065780462:web:e5c43464d9e01acb574dff"
  };

  firebase.initializeApp(firebaseConfig)


  function addUser()
  {
      user_name = document.getElementById("user_name").nodeValue;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
  