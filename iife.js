// IIFE  - Immediately Invoked function expression
//Benefits of IIFE  = It can create Local Scopes without polluting the global scopes
(function(){
    // console.log('hello');
    var a =10;
    var b =a/5;
    console.log(a+b);
})();
// console.log(a);//outside the iife a & b are not defined

(function (l,p,r,s){
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2)= " + r(2));
    l("sin(10) = " + s(10));

})(console.log,Math.pow,Math.sqrt,Math.sin);
// doMath();
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },100)
}

for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },100)
}
for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },100)
    })(i);
}

