//const url = "http://localhost:8080/api/";
const url = "http://pointh3.herokuapp.com/api/";

const form = document.querySelector(".form")
//const nameInput = document.getElementById("nameInput");
const mailInput = document.getElementById("mailInput")
const passwordInput = document.getElementById("passwordInput")
const btnInput = document.getElementById("btnInput");

const userInfoContainer = document.getElementById('userInfoContainer')
const userInfo = document.getElementById('userInfo')

const users = document.querySelector('.usuarios')
const container = document.getElementById("container");

window.onload = () => {
    console.log('Ready!');
};

const loginUser = async () => {
    const data = await fetch(url+'auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            mail: mailInput.value,
            password: passwordInput.value
        })
    }).then(el=>el.json())
    console.log(data)
    if(data.errors)return alert(data.errors[0].msg);
    //if(data.msg)return alert(data.msg);
    console.log(data);
    
    //
    userInfoContainer.classList.toggle('d-none')
    userInfo.innerHTML=`
        <h3>${data.user.name}</h3>
    `

};

btnInput.addEventListener('click', (ev) => {
    loginUser();
});

