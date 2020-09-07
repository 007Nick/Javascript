function greeter(){
    console.log("hello !");
}
let hellosayer = greeter;
console.log(hellosayer==greeter);
// greeter();
hellosayer();