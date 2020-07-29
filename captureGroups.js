//they are used to search for repeat substrings and use parentheses and backslashes
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
