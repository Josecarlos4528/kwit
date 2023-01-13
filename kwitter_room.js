
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig={
      apiKey: "AIzaSyBzEnxNuGKYZaRoIPDoZMUVvba1yy_QN9A",
  authDomain: "kwitterapp-db965.firebaseapp.com",
  databaseURL: "https://kwitterapp-db965-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-db965",
  storageBucket: "kwitterapp-db965.appspot.com",
  messagingSenderId: "157295659370",
  appId: "1:157295659370:web:4e2c7013dbd65946063d13"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("nombredeusuario");
document.getElementById("user_name").innerHTML="¡bienvenido "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"nombre de sala agregada"
      });
      localStorage.setItem("room_name", room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombres de salas: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("nombredeusuario");
      localStorage.removeItem("room_name");
      window.location="index.html";
}