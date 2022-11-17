document.querySelector("#btn1").addEventListener("click", increaseFunc)

var count = 0
function increaseFunc(){
    count++;
    document.querySelector("h1").innerText = count;
    document.querySelector("h1").style.color="green";

}

document.querySelector("#btn2").addEventListener("click", resetFunc)
function resetFunc(){
    count = 0;
    document.querySelector("h1").innerText = count;
    document.querySelector("h1").style.color="blue";
}

document.querySelector("#btn3").addEventListener("click", decreaseFunc)
var count = 0
function decreaseFunc(){
    count--;
    document.querySelector("h1").innerText = count;
    document.querySelector("h1").style.color="red";
}