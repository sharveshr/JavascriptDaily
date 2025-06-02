var arrayOne = ["aline", "moeen", "ali"];
arrayOne.shift(); //removes first element
arrayOne.push("moeen"); //adds to the end
arrayOne.unshift("superman"); // adds to the beginning
arrayOne.pop(); //removes the last element
function globalScope(){
    globalScope1 = 10; //  absence of var keyword makes it global 
}
function localScope(){
    var localScope1 = 5; // var keyword makes it local
}
localScope1 == undefined //true
