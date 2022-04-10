const nameInput = document.getElementById("nameInput");
const btnInput = document.getElementById("btnInput")

window.onload=()=>{
    var nameArray = ["Gideon","Phillip","Elon"];
    var rand1 = Math.floor(Math.random()*nameArray.length);
    var surnameArray = ["McKenzie","Marmaduke","Dominic","Gated"];
    var rand2 = Math.floor(Math.random()*surnameArray.length);
    var res = nameArray[rand1]+" "+surnameArray[rand2];
    nameInput.placeholder=res;
};

const searchUser = async ()=>{
    const url = "https://pointh3.herokuapp.com/api/users/";
    const users = await fetch(url,{
        method:"GET",
        body:{
            name:"asd"
        }
    }).then(el=>el.json());
    console.log(users)
};