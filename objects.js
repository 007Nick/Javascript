let x={
    a:10,//property: value
    b:"ASd",
    c:false,
    d:[1,2,3],
    e:{
        p:"Asd",
        q:true
    }
}
x.k = [2457,135]
console.log(x);

let obj ={
    aNumber:123,
    aString:"asdas",
    afunction: function(){
        return (this.aNumber + this.aString) //this refers to the object itself
    }
}
console.log(obj.afunction());