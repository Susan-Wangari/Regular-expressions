//uses (?) to match the smallest part of a string that matches the regex pattern
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);
