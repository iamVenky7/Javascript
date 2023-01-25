//Program to check if a number is prime or not
//using for loop

// var number = 22
// var isPrime = true

// // check if number is equal to 1
// if (number === 1) {
//   document.write("1 is neither prime not composite")
// }
// //check if number is greater is than 1
// else if (number > 1) {
//   for (var i = 2; i < number / 2; i++) {
//     if (number % i == 0) {
//       isPrime = false
//       break
//     }
//   }
//   if (isPrime == true) {
//     document.write(number + " is a prime number")
//   } else {
//     document.write(number + "not a prime number")
//   }
// } else {
//   document.write("The number is not a prime number")
// }

//Using while loop
// var num = 10
// var isPrime = true
// var x = 2

// if (num == 1) {
//   document.write("1 is not a prime nor a composite")
// } else if (num > 1) {
//   while (x < num / 2) {
//     if (num % 2 == 0) {
//       isPrime = false
//       break
//     }
//     x++
//   }
//   if (isPrime == true) {
//     document.write("Prime")
//   } else {
//     document.write("not prime")
//   }
// } else {
//   document.write("not prime --")
// }

//Program to check an Armstrong number of three digits
//  153 = 1*1*1+5*5*5+3*3*3
//  371
// var number = 153
// var sum = 0

// //Create a temporary variable
// let temp = number
// while (temp > 0) {
//   var remainder = temp % 10

//   sum += remainder * remainder * remainder

//   temp = parseInt(temp / 10) // convert float into integer
// }
// if (sum == number) {
//   document.write(number, "is an amstrong number")
// } else {
//   document.write(number, "is not an amstrong number")
// }

//3. Factorial of a number
//5*4*3*2*1

var i = 1
var n = 10
var f = 1

do {
  f = f * i
  i++
} while (i <= n)
{
  document.write("The factorial of ", n, "is ", f)
}
