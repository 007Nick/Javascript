function person(name, age){
    this.firstname =name.split(" ")[0];
    this.lastname = name.split(" ")[1];
    this.age =age;
    this.isAdult = function(){
        return age>18;
    }
}
let p = new person("john smith",30);
let h = new person("Harry potter", 12);
console.log(p);
console.log(p.isAdult());
console.log(h.isAdult());
// In above case, person is the classes and p , h are the objects and whole above person function is act like a
//constructor as when arguments are given to that function , it creates the object with variables like firstname , lastname, age and isAdult function.

//public and private
function Person(name, age){
    this.firstname =name.split(" ")[0];//public
    this.lastname = name.split(" ")[1];
    // let mAge =age;
    // now 'age' is like a private variable
    this.isAdult = function(){
        return age>18;
    }
}
let q = new Person("john smith",30);
let r = new Person("Harry potter", 12);
console.log(q);
console.log(q.isAdult());
console.log(r.isAdult());

