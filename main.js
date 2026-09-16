
///let namn = prompt("Vad heter du?");
/*alert("hej " + namn + "! Välkommen till vår webbplats");

/*let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}

alert("Summan av talen från 0 till 9 år:" + sum);*/

let pRef, buttonRef;

function init() {
    pRef = document.getElementById("text"); 
    buttonRef = document.getElementById("myButton");
    console.log(pRef);
    console.log(buttonRef);
    
    pRef.innerHTML = "Hej! Välkommen till vår webbplats.";

    pRef.style.color = "blue";

    buttonRef.addEventListener("click", changeText);

}

window.onload = init;

function changeText() {
    pRef.innerHTML = "Du klickade på knappen";
    pRef.style.color = "red";
}





