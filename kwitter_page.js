//TUS ANLACES DE FIREBASE
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
room_name=document.getElementById("room_name").value;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
         likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
         spanwithtag="<span class='glyphicon glyphicon-thums-up'>me gusta: "+like+"</span></button><hr>";
         row=namewithtag+messagewithtag+likebutton+spanwithtag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
      getData();
//Inica código
function enviar(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
//Termina código
     
function updatelike(message_id){
      console.log("boton me gusta pulsado"+message_id);
      button_id=message_id;
      like=document.getElementById(button_id).value;
      updatedlikes=Number(like)+1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedlikes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("nombredeusuario");
      localStorage.removeItem("room_name");
      window.location="index.html";
}