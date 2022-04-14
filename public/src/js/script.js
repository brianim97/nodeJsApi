//const url = "http://localhost:8080/api/users";
const url = "http://pointh3.herokuapp.com/api/users";

const form = document.querySelector(".form")
const nameInput = document.getElementById("nameInput");
//const mailInput = document.getElementById("mailInput")
const passwordInput = document.getElementById("passwordInput")
const btnInput = document.getElementById("btnInput");

const users = document.querySelector('.usuarios')
const container = document.getElementById("container");



window.onload=()=>{
    console.log('Ready!');
};

const loginUser = ()=>{
    fetch(url,{
        method:"POST"
    })
};

btnInput.addEventListener('click',(ev)=>{
    //createUser();
});

