//there are rules to follow when coming up with a username
let username = "JackOfAllTrades";
let userCheck =  /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;     
let result = userCheck.test(username);
