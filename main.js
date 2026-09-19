
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

hej()*/
//för att skriva ut functionen ska man skriva hej()

let pyramid = "*";

for (i = 1; i<7; i++ ) {
    
    pyramid += "*";
    
    console.log(pyramid); 
}

//for loop måste ha, for (start; villkor; ökning)