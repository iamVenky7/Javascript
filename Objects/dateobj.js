//used working with date and time

// extra:
// Set Interval function

// it will run a function rerpetatedly after a specific interval

// Ex: function execute after 5 secs

// function something() {
//   document.write("Hello world ")
// }

// setInterval("something()", 5000)

//Date Object - 4 ways to create date obj
// 1. new date constructor
// new date along with string
// var now = new Date(2018, 11, 24, 10, 33, 30)
// var now1 = new Date(2018, 11, 24, 10)
// var now2 = new Date("October 12 2014 11:30:34")
// document.write("<h1>" + now + "</h1>")
// document.write("<h1>" + now1 + "</h1>")

// document.write("<h1>" + now2 + "</h1>")

//Methods in Date obj -- almost 40+  diff methods are there ....
//current time

function clock() {
  var cd = new Date()
  var hours = cd.getHours()
  var minutes = cd.getMinutes()
  var seconds = cd.getSeconds()
  document.write("<h2>" + hours + ":" + minutes + ":" + seconds + "</h2>")
}
setInterval("clock()", 1000)
