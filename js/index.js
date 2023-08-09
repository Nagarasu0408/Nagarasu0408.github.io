let result=document.getElementById("display");

function Click(num){
	result.value +=num;
}

function EqualTo(){
	result.value=eval(result.value);
}

function Clear(){
	result.value="";
}

function nextPage(){
 location.href = "html/Color_change.html";
}

function nextPage2(){
 location.href = "html/todo_list.html";
}
function nextPage3(){
 location.href = "Bootstrap/demo.html";
}
