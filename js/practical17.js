//selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//Event Listner
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);


//function
function showtime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();


    //amPm
    const amPm = hour>12 ?'PM':'AM';
    //12hrs format
    hour - hour%12 || 12;
    //output
    time.innerHTML =`${addZero(hour)}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}<span> <span>${amPm}`
    date.innerHTML =`${todaydate}`;
    setTimeout(showtime,1000);
    
}
function addZero(n){
    return((parseInt(n,10)<10?'0':'')+n); 

}
function setGreeting(){
    let today = new Date();
    let hour = today.getHours(); //hour is in 24hr format
    if(hour<12){
        document.body.style.backgroundImage='url("../img/morning.jpg")';
        greeting.innerHTML ='Good Morning';
    }
    else if(hour<18){
        document.body.style.backgroundImage='url("../img/afternoon.jpg")';
        greeting.innerHTML ='Good Afternoon';
    }
    else{
        document.body.style.backgroundImage='url("../img/night.jpg")';
        greeting.innerHTML ='Good Night';
        document.body.style.color="white";

    }

}

function getName(){
    if(localStorage.getItem('myData')===null){
        name.innerHTML="Enter Name";
    }
    else{name.innerHTML=localStorage.getItem('myData');}
}

function setName(e){
    if(e.type==="keypress"){
if(e.keyCode == 13){
    localStorage.setItem("mydata",e.target.innerHTML);
    name.blur();
}

    }
    else{
        localStorage.setItem('myData',e.target.innerHTML);
    }
}


//function call
getName();
showtime();
setGreeting();