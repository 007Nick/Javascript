//A fucntion that returns a function or if a function takes a function as an argument is called higher order function
// function as argument
function getFirstName(fullName){
    return fullName.split(" ")[0];
}

function greeter(findName,fullName){
    let firstName = findName(fullName);
    console.log("hello " + firstName);
}
greeter(getFirstName, "Arnav Gupta");

// function as returns a function
function createGreeter(name){
    let firstName = name.split(" ")[0];
    function greeter(){
        console.log("Hello " + firstName);
    }
    return greeter;
}
let johngreeter = createGreeter("John Doe");
let harrygreeter = createGreeter("Harry Potter");

johngreeter();
harrygreeter();


// Practical Example

function createCounter(initVal, delta){
    let val = initVal;
    function counter(){
        val = val + delta;
        return val;
    }
    return counter;
}
let fivecount = createCounter(5,5);
let anotherCounter = createCounter(18,4);
console.log(fivecount());
console.log(fivecount());
console.log(fivecount());

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());


