function someAsyncTask(callback){
    console.log("Beginning of task")
    setTimeout(function(){
        console.log("end of the task");
        callback();
    },3000)
}

let someTaskPromise = function(){
    return new Promise (function(resolve,reject){
        someAsyncTask(resolve);
    })
}
someTaskPromise().then(function(){
    console.log("after the task is complete");
});