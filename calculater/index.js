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
 location.href = "../Color_change/Color_change.html";
}

function nextPage2(){
 location.href = "../TODO_list/todo_list.html";
}