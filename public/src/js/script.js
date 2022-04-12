const url = "https://pointh3.herokuapp.com/api/users";
const nameInput = document.getElementById("nameInput");
const mailInput = document.getElementById("mailInput")
const btnInput = document.getElementById("btnInput");
const passwordInput = document.getElementById("passwordInput")
const container = document.getElementById("container");
window.onload=()=>{
    var nameArray = ["Gideon","Phillip","Elon"];
    var rand1 = Math.floor(Math.random()*nameArray.length);
    var surnameArray = ["McKenzie","Marmaduke","Dominic","Gated"];
    var rand2 = Math.floor(Math.random()*surnameArray.length);
    var res = nameArray[rand1]+" "+surnameArray[rand2];
    //nameInput.placeholder="Nombre...";
};

const createUser = async ()=>{
    const users = await fetch(url,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            name:nameInput.value,
            mail:mailInput.value,
            password:passwordInput.value
        })
    }).then(el=>el.json());

    console.log(users);
    searchUser();
};
const searchUser = async ()=>{
    container.innerHTML=" ";
    
    const users = await fetch(url).then(el=>el.json()).then(el=>{return el.users});
    users.forEach(el => {
        var obj = document.createElement("li");
        obj.classList.add("list-group-item");
        obj.innerHTML = `${el.name} <span class="text-primary">${el.mail}</span> </li>`;
        container.appendChild(obj);
        console.log(el)
    });
    
};

