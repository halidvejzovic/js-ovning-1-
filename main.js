
///let namn = prompt("Vad heter du?");
/*alert("hej " + namn + "! Välkommen till vår webbplats");

/*let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}

alert("Summan av talen från 0 till 9 år:" + sum);*/

let pRef, buttonRef, buttonRef2, sectionRef;


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
    buttonRef2.addEventListener("mouseover", changeText2);

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
    sectionRef.innerHTML += "detta är en ny parragraf";

}


