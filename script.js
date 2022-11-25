var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeButton = document.getElementById("randomize");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	let tempColor1 = randomColor();
	let tempColor2 = randomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ tempColor1 
	+ ", " 
	+ tempColor2 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(){
	let randomNumber = Math.random() * 0xFFFFFF; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizeButton.addEventListener("click", setRandomColors);