const nameInput = document.getElementById("nameInput");

window.onload=()=>{
    var nameArray = ["Gideon","Phillip","Elon"];
    var rand1 = Math.floor(Math.random()*nameArray.length);

    var surnameArray = ["McKenzie","Marmaduke","Dominic","Gated"];
    var rand2 = Math.floor(Math.random()*surnameArray.length);


    var res = nameArray[rand1]+" "+surnameArray[rand2];

    nameInput.placeholder=res
};