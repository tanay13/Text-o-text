const socket=io();
const messageForm=document.querySelector("#send-container");
const messageInput=document.querySelector(".messageinput");
const container=document.querySelector(".container");
// const userJoin=require("../users");
var user = prompt("What is your name?");

socket.emit("newuser",user);
console.log(user);
socket.on("message",data=>{
   outputMessage(data);
   container.scrollTop=container.scrollHeight;
})

messageForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   const msg=messageInput.value;
   socket.emit("chatMessage",msg);
   inputMessage(msg);
  container.scrollTop=container.scrollHeight;
   e.target.elements[0].value="";
   e.target.elements[0].focus();
   

})

function outputMessage(message){
   const div=document.createElement("div");
   div.classList.add("left");
   div.innerHTML=`<p>${message}</p>`;
  
   document.querySelector(".container").appendChild(div);
}
function inputMessage(message){
   const div=document.createElement("div");
   div.classList.add("right");
   div.innerHTML=`<p class="text">${message}</p>`;
  
   document.querySelector(".container").appendChild(div);
}
