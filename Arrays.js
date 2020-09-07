let arr = [1,2,3]
console.log(arr.length)
console.log(arr[1])

let arr1 = [1,'hello',false,[2,3]]
console.log(typeof arr1[1])

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// for(let val of arr1){
//     console.log(val)
// }
for(let index in arr1){
    console.log(index)
}