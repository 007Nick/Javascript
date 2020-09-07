
// function task(done){
//     console.log("doing some task");
//     done();
// }
// task(function(){
//     console.log("task was done")
// })
//
// console.log("we did a task")


// function done(){
//     console.log("task was done");
// }
// setTimeout(done,1000)// this delay is async in nature as we can do other things during this period
//
// console.log("we did a task");

function task(done){
    console.log("we are doing a task");
    setTimeout(done,1000)
}
task(function(){
    console.log("task was done");
})
console.log("we did a task");