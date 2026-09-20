
///let namn = prompt("Vad heter du?");
/*alert("hej " + namn + "! Välkommen till vår webbplats");

/*let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}

alert("Summan av talen från 0 till 9 år:" + sum);*/

/*let pRef, buttonRef, buttonRef2, sectionRef;


function init() {
    pRef = document.getElementById("text"); 

    buttonRef = document.getElementById("myButton");
    buttonRef2 = document.getElementById("myButtons");
    sectionRef = document.getElementById("section");
   
    console.log(pRef);
    console.log(buttonRef);
    
    pRef.innerHTML = "Hej! Välkommen till vår webbplats.";

    pRef.style.color = "blue";

    buttonRef.addEventListener("mouseover", changeText);
    buttonRef2.addEventListener("mouseover", event =>{
        changeText2();
        addText();
});

}

window.onload = init;

function changeText() {
    pRef.innerHTML = "Du klickade på knappen";
    pRef.style.color = "red";
}

function changeText2(){
    pRef.innerHTML = "Du klickade igen på knappen";
    pRef.style.color = "yellow";
}

function addText(){
    sectionRef.innerHTML += "<p>detta är en ny parragraf</p>";*/


/*let pRef

function pyramid()  {
    
    pRef = document.getElementById("text");

    inuti();
}

window.onload = pyramid;

function inuti() {

    let last = "*"
    let namn = "^"
    pRef.innerHTML = last + namn;
}
*/

/*let namn = "Halid";

if (namn === "Halid") {
    console.log("Hej!");
}

function hej() {
    console.log("hej!");
}

hej()*/  //för att skriva ut functionen ska man skriva "hej()"


/*
let pyramid = ""; // defination av pyramid
for (let i = 1; i<=7; i++ ) { //defination av i samt start, vilkor, ökningav i
    
    pyramid += "#"; //definationn av pyramid dvs att den skriver ut det som är inom "" samt att den ökar meed ett
    
    console.log(pyramid); // skriv ut i consol värdet variabeln pyramid
}

//for loop måste ha, for (start; villkor; ökning)

/*
for (let i = 1; i<=100; i++) { // //defination av i samt start, vilkor, ökningav i till det kommer upp till 100

    if (i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    
    else{
        console.log(i);
    }
}
*/
/*
let rad = "\n";
for (let i = 0; i < 8; i++) {
    rad +="* ";
}

console.log(rad);  */


for (let i = 0; i < 8; ++i) {

    let rad = ""
    for (let i = 0; i < 8; i++) {
        rad +="* ";
    }
    console.log(rad);
    
}




