
let para=document.getElementById("Myself");

let Btn=document.getElementById("ColorChangeButton");

Btn.addEventListener("click",Click);

var Colors_code=16777215;

function Click(){
	var Color = Math.floor(Math.random()*Colors_code).toString(16);
	para.style.color = '#'+Color;
}