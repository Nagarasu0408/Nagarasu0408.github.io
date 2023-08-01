
let i=0;

let Button=document.getElementById("Add");
Button.addEventListener("click",AddClick);

let result=document.getElementById("display");
let List=[];

let clear=document.getElementById("Clear");
clear.addEventListener("click",Clear);

let submit=document.getElementById("Submit");
submit.addEventListener("click",Submit);

function AddClick(){
	let Value=document.getElementById("TodiList").value;
	List.push(Value);
	if(Value === ""){
		result.innerHTML="Enter any Message";
	}
	else{
	result.innerHTML=List.join("<br>");
	document.getElementById("TodiList").value="";
}
}

function Clear(){
	if(List.length!=0){
	result.innerHTML="List Clear";
}
else{
	result.innerHTML="List Already Empty";
}
}

function Submit(){
	if(List.length==0){
	result.innerHTML="List Empty";
}
else{
	result.innerHTML="SuccessFully Submited";
}
}