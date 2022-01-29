const firebaseConfig = {
    apiKey: "AIzaSyBo0LCFg0qTr-uwlBNoBXG5iTqh4HsKIHA",
    authDomain: "kwitter-project-94-e3691.firebaseapp.com",
    projectId: "kwitter-project-94-e3691",
    storageBucket: "kwitter-project-94-e3691.appspot.com",
    messagingSenderId: "477720283286",
    appId: "1:477720283286:web:c777c93ceeffe413891ab7",
    measurementId: "G-H8Z962Q91Y"
};

const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem(id = "user_name");
    document.getElementById("user_name").innerHTML = "Welcome"+ user_name+ "!";

function addRoom()
{

room_name = document.getElementById("room_name").ariaValueMax;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"      
});

localStorage.setItem("room_name",room_name);
window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+Room_names);
row = "<div class = 'room_name' id ="+Room_names+ "onclick = 'redirectToRoomName(this.id)'># "+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}

getData();

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_room.html"

}
