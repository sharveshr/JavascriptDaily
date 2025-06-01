console.time('ended');
var word = "hello";
console.log(word.indexOf('a'));
console.log(word.charAt(1));
console.log(word.indexOf('h'));
var word = function (a){
    return "hi" + a;
};
console.log(word("sharan"));
console.error("wrong answer bro");
console.warn("don't repeat this next time");
console.log("TOday is June 1");
var object1 = {
    a : 1,
    b : "ball",
    c : function(){
        return "hellow";
    }
};
console.log(object1.c());
console.log(object1.c().length);
console.timeEnd('ended');