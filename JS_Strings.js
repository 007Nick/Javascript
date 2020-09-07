 //Strings
 let str="this is string"
 let str1 = 'this is arnav\'s string'
 console.log(str)
 console.log(str1)
 let p ='yash'
 let str2 = `this is ${p}'s string`
 console.log(str2)
 let longstr = 'this is \
 a very long\
 string'
 console.log(longstr)
 console.log(longstr.length)
 console.log(str.length)
 console.log(p.length)

 //searching
 let s = 'this has some data here'
 let key='has'
 console.log(s.indexOf(key))
 let h = 'this is very tasty'
 console.log(h.indexOf('is',3))
 console.log(h.indexOf('is',1))

 let s2 = 'ab aab abbcd ba aab'
 console.log(s2.lastIndexOf('ab',16))