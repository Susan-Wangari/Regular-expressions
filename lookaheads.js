//has both positive and negative lookaheads
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);
