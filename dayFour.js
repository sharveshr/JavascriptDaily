//to check for an object in an array 
var arrayOne = {
    "pony":"horse",
    "ewe":"sheep",
    "kitty":"cat"
};
var a = (pony) => {
    if(arrayOne.hasOwnProperty(pony)){
    return arrayOne[pony];
}
}
console.log(a("pony"));

//nested objects
var a = {
    "car": {
        "inside" : {
            "glove box" : "gloves",
            "dashboard" : "speedometer"
        },
        "outside" : {
            "windshield" : "glass"
        }
    }
};
a.car.inside["glove box"];