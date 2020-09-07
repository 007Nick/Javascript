// console.log(this);
function fun(){
    console.log(global == this)// global is a special object inside which all global items are present but global not run in browser
    return 10;                          // as window exist in browser like window.parseInt
}                             // in node.js equivalent of window is global
// fun();// this keyword of a function prefers to global
// new fun();//in this case, this keyword not refers to global
// In javascript , new keyword creates an empty box i.e called empty object and the fun() then runs in that box and in that box, this keyword refers to box itself

function fun(){
    this.p="something";
    return 10; // it has no purpose when function called it with new keyword
}
let o1 = fun();
let o2 = new fun();
console.log(o1);
console.log(o2);
console.log(o1.p);
console.log(o2.p);