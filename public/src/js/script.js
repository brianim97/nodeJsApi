const nameInput = document.getElementById("nameInput");
const btnInput = document.getElementById("btnInput")
const container = document.getElementById("container")
window.onload=()=>{
    var nameArray = ["Gideon","Phillip","Elon"];
    var rand1 = Math.floor(Math.random()*nameArray.length);
    var surnameArray = ["McKenzie","Marmaduke","Dominic","Gated"];
    var rand2 = Math.floor(Math.random()*surnameArray.length);
    var res = nameArray[rand1]+" "+surnameArray[rand2];
    nameInput.placeholder=res;
};

//<li class="list-group-item">A second item <span class="text-primary">HOLA</span> </li>     

const searchUser = async ()=>{
    container.innerHTML=" ";
    const url = "https://pointh3.herokuapp.com/api/users";
    const users = await fetch(url).then(el=>el.json()).then(el=>{return el.users});
    const a = [1,2,3,4,"asd"]
    users.forEach(el => {
        var obj = document.createElement("li");
        obj.classList.add("list-group-item");
        obj.innerHTML = `${el.name} <span class="text-primary">${el.mail}</span> </li>`;
        container.appendChild(obj);
        console.log(el)
    });
    
};

