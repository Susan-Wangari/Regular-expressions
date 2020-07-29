//uses parentheses () to check for groups of characters using regex
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString); 
// After passing the challenge experiment with myString and see how the grouping works
