var display = document.getElementById('result');

var translation = "";

var input = prompt("Enter a message");

input = input.toLowerCase();

function findLetterTranslation(x){
	var morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    '\'': ".----.",
    "-": "-....-",
    "\"": ".-..-.",
    " ": "|"
  };

  for (var letter in morseCode){
  	if (x==letter){
  		if(morseCode[letter]=="|"){
  			return morseCode[letter];
  		} else {
  			return morseCode[letter]+" ";
  		}
  	}
  }
}

function translateString(wholeString){
	for(var i = 0;i<wholeString.length; i++){
		var char = wholeString.charAt(i);
		translation += findLetterTranslation(char);
	}
}
translateString(input);

display.innerHTML = translation;