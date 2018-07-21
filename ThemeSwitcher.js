var islight = 1;
var theme = "red";
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

/*function initate() {
    var style1 = document.getElementById("style1");
    var style2 = document.getElementById("style2");


    style1.onclick = swapStyleSheet("style.css");
    style2.onclick = swapStyleSheet("blue.css");

}*/
function style1() {
	theme = "red";
	if(islight == 1) {
		swapStyleSheet("css/light.css");
	}
	else {
		swapStyleSheet("css/dark.css");
	}
}
function style2() {
			theme = "orange";
	if(islight === 1) {
		swapStyleSheet("css/lightorange.css");
	}
	else {
		swapStyleSheet("css/darkorange.css");
	}
}
function style3() {
	theme = "green";

	if(islight === 1) {
		swapStyleSheet("css/lightgreen.css");
	}
	else {
		swapStyleSheet("css/darkgreen.css");
	}
}

function style4() {
	theme = "blue";
if(islight === 1) {
		swapStyleSheet("css/lightblue.css");
		
	}
	else {
		swapStyleSheet("css/darkblue.css");
	}	
}
function style0(){
	if(islight === 1) {
		if(theme === "red") {
			swapStyleSheet("css/dark.css");
			islight = 0;
		}
		else if(theme === "orange") {
			swapStyleSheet("css/darkorange.css");
			islight = 0;
		}
		else if(theme === "green") {
			swapStyleSheet("css/darkgreen.css");
			islight = 0;
		}
		else if(theme === "blue") {
			swapStyleSheet("css/darkblue.css");
			islight = 0;
		}
	}
	else {
		if(theme === "red") {
			swapStyleSheet("css/light.css");
			islight = 1;
		}
		else if(theme === "orange") {
			swapStyleSheet("css/lightorange.css");
			islight = 1;
		}
		else if(theme === "green") {
			swapStyleSheet("css/lightgreen.css");
			islight = 1;
		}
		else if(theme === "blue") {
			swapStyleSheet("css/lightblue.css");
			islight = 1;
		}
	}
}