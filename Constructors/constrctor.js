//var obj_name = new Object() // styntax empty obj by using obj constructor method

var rect2 = new Object() // var rect2 = {}
//ass properties to obj

// rect2.length = 5
// rect2.width = 10

// rect2.getArea = function () {
//   return this.length * this.width
// }

// rect2.getPerimeter = function () {
//   return 2 * this.length + 2 * this.width
// }

// document.write("<h2>" + rect2.length + "</h2>")
// document.write("<h2>" + rect2.width + "</h2>")
// document.write("<h2>" + rect2.getArea() + "</h2>")
// document.write("<h2>" + rect2.getPerimeter() + "</h2>")

//Constrctor function method
// used for mutiple instances of objs
function rect3(length, width) {
  //properties as parameters
  this.length = length //value
  this.width = width
  this.getArea = function () {
    return length * width
  }
  this.getPerimeter = function () {
    return 2 * length + 2 * width
  }
}

var r1 = new rect3(5, 10) //ad: we can create more objs
document.write("<h2>" + r1.length + "</h2>")
document.write("<h2>" + r1.width + "</h2>")
document.write("<h2>" + r1.getArea() + "</h2>")
document.write("<h2>" + r1.getPerimeter() + "</h2>")

var r5 = new rect3(2, 10)

document.write("<h2>" + r5.length + "</h2>")
document.write("<h2>" + r5.width + "</h2>")
document.write("<h2>" + r5.getArea() + "</h2>")
document.write("<h2>" + r5.getPerimeter() + "</h2>")
