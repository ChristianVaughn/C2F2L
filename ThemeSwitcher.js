var color = 'red'
function swapStyleSheet() {
	var theme = localStorage.getItem('theme');
	if (theme) {
    	document.getElementById("pagestyle").setAttribute("href", theme);  
		   // $('#theme').attr('href', theme);

	}
}


function style1() {
	var islight = localStorage.getItem('islight');
	color = 'red';
	if(islight === 'light') {
		localStorage.setItem('theme', 'css/light.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/dark.css');
		swapStyleSheet();
	}
}
function style2() {
	var islight = localStorage.getItem('islight');
	color = 'orange';
	if(islight === 'light') {
		localStorage.setItem('theme', 'css/lightorange.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/darkorange.css');
		swapStyleSheet();
	}
}
function style3() {
	var islight = localStorage.getItem('islight');
	color = 'green';
	if(islight === 'light') {
		localStorage.setItem('theme', 'css/lightgreen.css');
		swapStyleSheet();
	}
	else {
		localStorage.setItem('theme', 'css/darkgreen.css');
		swapStyleSheet();
	}
}

function style4() {
	var islight = localStorage.getItem('islight');
	color = 'blue';
	if(islight === 'light') {
		localStorage.setItem('theme', 'css/lightblue.css');
		swapStyleSheet();
		
	}
	else {
		localStorage.setItem('theme', 'css/darkblue.css');
		swapStyleSheet();
	}	
}
function style0(){
	var islight = localStorage.getItem('islight');
	if(islight === 'light') {
		localStorage.setItem('islight', 'dark');

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
		localStorage.setItem('islight', 'light');
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