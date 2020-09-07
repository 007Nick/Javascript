 var a = 10;
a=11;
a++;
console.log(a);

let b=20;
b++;
console.log(b);
// const c= 30;
// c++;/ERROR
// console.log(c);

 const obj={
     k1 :'asd',
     k2:10,
     k3:false
 };
 obj.k4 = 123;
 console.log(obj.k4);
 delete obj.k1;
 console.log(obj.k1);

 const arr =[1,2,3];

 arr.push(5);
 console.log(arr);

 // const x = []
 // x = // we cannot put x in the LHS of assignment operator thats const means

 var myVar = 10;
 function alpha(){ // Var has scope all over the function
     var myVar = 11;
     if(true){
         var myVar =21;
         console.log(myVar);
     }
     console.log(myVar);
 }
 alpha();

 let myVAr = 10;
 function alpha(){
     let myVAr = 11;// separate variable in let scope
     if(true){
         let myVAr =21; // separate variable in let scopes
         console.log(myVAr);
     }
     console.log(myVAr);
 }
 alpha();

 const myVAR = 10;
 function alpha(){
     const myVAR = 11;// const also has block scopes as like let
     if(true){
         const myVAR =21;
         if(true){
             console.log(myVAR);// But not like let in this value 21 is inherited 
         }
         console.log(myVAR);
     }
     console.log(myVAR);
 }
 alpha();