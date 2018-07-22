var islight = 1;
var color = 'red'
function swapStyleSheet() {
	var theme = localStorage.getItem('theme');
	if (theme) {
    	document.getElementById("pagestyle").setAttribute("href", theme);  
		   // $('#theme').attr('href', theme);

	}
}


function style1() {
	color = 'red';
	if(islight === 1) {
		localStorage.setItem('theme', 'css/light.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/dark.css');
		swapStyleSheet();
	}
}
function style2() {
	color = 'orange';
	if(islight === 1) {
		localStorage.setItem('theme', 'css/lightorange.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/darkorange.css');
		swapStyleSheet();
	}
}
function style3() {
	color = 'green';
	if(islight === 1) {
		localStorage.setItem('theme', 'css/lightgreen.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/darkgreen.css');
		swapStyleSheet();
	}
}

function style4() {
	color = 'blue';
	if(islight === 1) {
		localStorage.setItem('theme', 'css/lightblue.css');
		swapStyleSheet();
		
	}
	else {
		localStorage.setItem('theme', 'css/darkblue.css');
		swapStyleSheet();
	}	
}
function style0(){
	if(islight === 1) {
		islight = 0;
		if(color === "red") {
			localStorage.setItem('theme', 'css/dark.css');
			swapStyleSheet();
		}
		else if(color === "orange") {
			localStorage.setItem('theme', 'css/darkorange.css');
			swapStyleSheet();
		}
		else if(color === "green") {
			localStorage.setItem('theme', 'css/darkgreen.css');
			swapStyleSheet();
		}
		else if(color === "blue") {
			localStorage.setItem('theme', 'css/darkblue.css');
			swapStyleSheet();
		}
	}
	else {
		islight = 1;
		if(color === "red") {
			localStorage.setItem('theme', 'css/light.css');			
			swapStyleSheet();
		}
		else if(color === "orange") {
			localStorage.setItem('theme', 'css/lightorange.css');
			swapStyleSheet();
		}
		else if(color === "green") {
			localStorage.setItem('theme', 'css/lightgreen.css');
			swapStyleSheet();
		}
		else if(color === "blue") {
			localStorage.setItem('theme', 'css/lightblue.css');
			swapStyleSheet();
		}
	}
}
document.addEventListener("DOMContentLoaded", function() {
  swapStyleSheet();
});