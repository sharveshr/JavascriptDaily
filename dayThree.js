//implementing queue
function arrayDS(arr,item){
    arr.push();
    return arr.shift();
}
//visualizing above code
arraySample = [1,2,3,4,5];
console.log(JSON.stringify(arraySample));
arrayDS(arraySample,6);
console.log(JSON.stringify(arraySample));
//multiple switch
switch(num){
    case 1:
    case 3:
    case 5:
        console.log("odd");
        break;
    case 2:
    case 4:
    case 6:
        console.log("even");
        break;
}
var dog = {
    "bark" : "bow",
    "legs" : 4,
    "eyes" : 2
} // this is an object 
dog.mouth = 1;
dog['nose'] = 1;
console.log(dog);
delete dog.legs;
//objects for lookups
function lookitup(switchVariable) {
    var answer = "";
    switch(switchVariable){
        case "sack":
            answer = "suck";
            break;
        case "bag" :
            answer = "sag";
            break;

    }
    return answer;
}
//instead of above code use below code
function easyLookup(switchVariable){
    var answer = "";
     var objectLookup = {
        "sack":"suck",
        "bag":"sag"
     };
     answer = objectLookup[switchVariable];
     return answer;
}