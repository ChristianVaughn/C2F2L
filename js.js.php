function NewScramble(z0) {
	var MoveNames = ["R", "R2", "R'", "F", "F2", "F'", "L", "L2", "L'", "B", "B2", "B'", "U", "U2", "U'", "D", "D2", "D'"];
	var MoveNamesWCA;
	if ("White" == "Yellow") {
		MoveNamesWCA = ["R", "R2", "R'", "F", "F2", "F'", "L", "L2", "L'", "B", "B2", "B'", "U", "U2", "U'", "D", "D2", "D'"];
	} else {
		MoveNamesWCA = ["R", "R2", "R'", "B", "B2", "B'", "L", "L2", "L'", "F", "F2", "F'", "D", "D2", "D'", "U", "U2", "U'"];
	}
	var Level = document.getElementById("Level").value;
	var RandomScramble = Scrambles[Level - 1][Math.floor(Math.random() * 1000)];
	var TextScramble = "";
	var TextScrambleWithSpaces = "";
	
	document.getElementById("Output").innerHTML = "";
	
	for (var A = 0; A < RandomScramble.length; A++) {
		TextScramble += MoveNames[RandomScramble[A].charCodeAt(0)-'A'.charCodeAt(0)];
		if (A > 0) {
			TextScrambleWithSpaces += " ";
		}
		TextScrambleWithSpaces += MoveNamesWCA[RandomScramble[A].charCodeAt(0)-'A'.charCodeAt(0)];
	}
	
	if ("0" != "0") {
		var OutputString = '';
		OutputString = OutputString + '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="5" BGCOLOR="#000000">';

		var TextScrambleArray = TextScrambleWithSpaces.split(" ");

		for (var A = 0; A < TextScrambleArray.length+2; A++) {
			if (A % '0'.value == 0) {
				OutputString = OutputString + '<TR>';
			}

			if (A == 0) {
				OutputString = OutputString + '<TD WIDTH="124" BGCOLOR="#FFFFFF"><CENTER><IMAGE HEIGHT="124" SRC="http://cube.crider.co.uk/visualcube.php?fmt=png&?size=124&r=';
				if ("White" == "Yellow") {
					OutputString = OutputString + 'y24x-24';
				} else {
					OutputString = OutputString + 'y-24x-204';
				}
				OutputString = OutputString + '&alg=">';
			} else if (A == TextScrambleArray.length+1) {
				OutputString = OutputString + '<TD WIDTH="124" BGCOLOR="#FFFFFF"><CENTER><IMAGE HEIGHT="124" SRC="http://cube.crider.co.uk/visualcube.php?fmt=png&?size=124&r=';
				if ("White" == "Yellow") {
					OutputString = OutputString + 'y24x-24';
				} else {
					OutputString = OutputString + 'y-24x-204';
				}
				OutputString = OutputString + '&alg=' + TextScramble + '">';
			} else {
				OutputString = OutputString + '<TD WIDTH="124" BGCOLOR="#FFFFFF"><CENTER>';
				var Move = TextScrambleArray[A-1].substring(0, 1);
				var MoveVariant = TextScrambleArray[A-1].substring(1, 2);
				if (MoveVariant == "'") {
					MoveVariant = 'i';
				}
				if (MoveVariant == '2') {
					OutputString = OutputString + '<IMAGE SRC="../Images/' + Move + '.png">';
							OutputString = OutputString + '<IMAGE SRC="../Images/' + Move + '.png">';				} else {
					OutputString = OutputString + '<IMAGE SRC="../Images/' + Move + MoveVariant + '.png">';
				}
			}
		}

		Output(OutputString);
	}
	
	Output(TextScrambleWithSpaces + "<BR>");
}

var Output = function(z0) {
	document.getElementById("Output").innerHTML = document.getElementById("Output").innerHTML + z0;
}
