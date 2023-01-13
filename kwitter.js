function adduser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("nombredeusuario",username);
    window.location="kwitter_room.html";
}