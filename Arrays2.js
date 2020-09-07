//Arrays - Data Changing
// let notes =['do','re','mi','fa','so','la','ti','do']
let notes =['do','re','mi']
//slice
// console.log(notes.slice(4))
// console.log(notes.slice(4,6))//slice is not destructive in naturre means that the actual array is not changed
// console.log(notes)
//splice
// let omit = notes.splice(4 ,2)// splice is destructive in nature
// console.log(omit)
// console.log(notes)

//splice part -2(splice can change data inside)
// notes.splice(0,3,'sa','re','ga')
// console.log(notes)

//concat//it is non-destructive in nature
console.log(notes.concat('sa','re','ga'))
console.log(notes)
