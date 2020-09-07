1=="1"// true // typecast to make both sides types same
1==="1"// false // striped equality operator// ye dono side ki type aur value dekhta hai// not typecast

console.log((1+"1") == 11) // true
console.log("11" - 1 == 1)// false + (NaN not a number)
console.log([] == "")// true
console.log([] == 0)//true
console.log(0 == "")//true
// "" can be typecast to zero and [] can also be typecast to ""
console.log({} + []);//0
console.log([] + {})

//unary operator
console.log(typeof "1");
console.log(typeof +"1")

console.log(+[]);
let o ={}
console.log(o.toString());
console.log("" + {});// string object mein typecast nhi ho skta but object string mein typecast ho skta hai
// In javascript operator , braces {} are used for object and blocks so when braces are in LHS then treated for block and in RHS then treated as object
