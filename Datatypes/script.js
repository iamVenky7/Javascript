var x = 16
var y = "Hey!, there"
var flag = true

var p // undefined - lack of value
var q = null //
document.write(typeof x)
document.write(typeof y)
document.write(typeof flag)
document.write(typeof p)
document.write(typeof q)

//Type conversion

var num = String(34)
console.log(num, typeof num)

var str = "Hello there"
console.log(str, typeof str)

var bool = String(true)
console.log(bool, typeof bool)

var str1 = Number("896")
str1 = str1 + 2
console.log(str1, typeof str1)

var str2 = Number("896A")
// str1 = str1 + 2
console.log(str2, typeof str2)

var bool2 = Number(true) // true-2, false-0
console.log(bool2, typeof bool2)

var number = parseInt("56.343")
console.log(number, typeof number)

var number1 = Number("56.343")
console.log(number1, typeof number1)

var number3 = parseFloat("56.343")
console.log(number3, typeof number3)

var number = parseFloat("72.543")
console.log(number.toFixed(30), typeof number)
