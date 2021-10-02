//ADD YOUR FIREBASE LINKS HERE

  var firebaseConfig = {
    apiKey: "AIzaSyDFRtCL2lruKQGcwxSMBm_kh0_WwbC8JyQ",
    authDomain: "kwitter-7876e.firebaseapp.com",
    databaseURL: "https://kwitter-7876e-default-rtdb.firebaseio.com",
    projectId: "kwitter-7876e",
    storageBucket: "kwitter-7876e.appspot.com",
    messagingSenderId: "144049235046",
    appId: "1:144049235046:web:bfce2d29f0a443b461f9a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });
});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ("index.html");
}