const url = "http://localhost:8080/api/users";

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

    //if(localStorage.getItem("login"))return alert("Solo se permite una cuenta por dispositivo")
    if(users.errors)return alert(users.errors[0].msg);
    console.log(users);
    localStorage.setItem('user',JSON.stringify(users))
    //localStorage.setItem("login",true);
};

const searchUser = async ()=>{
    container.innerHTML=" ";
    
    const users = await fetch(url).then(el=>el.json()).then(el=>{return el.users});
    users.forEach(el => {
        var obj = document.createElement("li");
        obj.classList.add("list-group-item");
        obj.innerHTML = `${el.name} <span class="text-primary">${el.mail}</span> </li>`;

        if(el.mail=='admin@gmail.com'){
            obj.innerHTML = `<li><i class="bi bi-award"></i> ${el.name} <span class="text-primary">${el.mail}</span> </li>`;
        }

        container.appendChild(obj);
        //console.log(el)
    });
    
};

btnInput.addEventListener('click',(ev)=>{
    //createUser();
});

