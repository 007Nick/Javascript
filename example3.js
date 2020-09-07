function f1(){
    function f2(){
        return 5;
    }
    return f2;
}
let x = f1();// line 3 will not execute
let p = x();// line 3 will execute
console.log(p);