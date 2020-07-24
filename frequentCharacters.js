//(+) is used to check for characters that occur more than once consecutively
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);
