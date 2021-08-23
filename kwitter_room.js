
//ADD YOUR FIREBASE LINKS HERE

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

function getData() { firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
            childKey = childSnapshot.key; 
            Room_names = childKey; 
            console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row; 
            }); }); } 
      //Start code

      //End code
      
getData();
