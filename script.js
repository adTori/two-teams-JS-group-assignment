// CHANGE A TEAM NAME

let newATeam = document.querySelector(".aNamn");

const bytA = document.querySelector("#bytA");

const btnA = document.querySelector(".btnA");

btnA.addEventListener("click", () => {
    newATeam.innerText = bytA.value
})


// CHANGE B TEAM NAME

let newBTeam = document.querySelector(".bNamn");

const bytB = document.querySelector("#bytB");

const btnB = document.querySelector(".btnB");

btnB.addEventListener("click", () => {
    newBTeam.innerText = bytB.value
})


// ADD PLAYER

let newPlayer = document.querySelector("#playerAdd");
let btnAdd = document.querySelector(".btnAdd");

const ulA = document.querySelector(".aSpelare");
const ulB = document.querySelector(".bSpelare");

// let teamA = [];
// let teamB = [];

// function addPlayer(){

// }



btnAdd.addEventListener("click", () => {
    let li = document.createElement('li')
    
    const leave = document.createElement("button")
    leave.innerText = "Leave Team"
    leave.style.backgroundColor = "yellow"

    leave.addEventListener("click", () => {
        li.remove();
    })

    const change = document.createElement("button")
    change.innerText = "Change Team"
    change.style.backgroundColor = "chartreuse"

    li.innerText = newPlayer.value
    li.append(leave, change)

    if (ulA.children.length < 5) {
        ulA.append(li)
    } else if (ulB.children.length < 5) {
        ulB.append(li)
    } else {
        alert("You've maxed out both teams!")
    }

    // change.addEventListener("click", () => {
    // if (ulA.children.length <= 5 || ulB.children.length <= 5) {
    //     append.event.target.closest(".lag")
    // }})

    change.addEventListener("click", () => {
        if (ulA.children.length <= 5) {
            ulB.append(li)
        } else if (ulB.children.length <= 5) {
            ulA.append(li) 
        } else {
            alert("The other team is full!")
        }})

    document.querySelector("#playerAdd").value = "";
});



// LEAVE TEAM