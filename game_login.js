function adduser(){
player1_name=document.getElementById("Player1_name").value;
player2_name=document.getElementById("Player2_name").value;
localStorage.setItem("key1",player1_name);
localStorage.setItem("key2",player2_name);
window.location="index.html"
}
