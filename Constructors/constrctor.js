//var obj_name = new Object() // styntax empty obj by using obj constructor method

var rect2 = new Object() // var rect2 = {}
//ass properties to obj

rect2.length = 5
rect2.width = 10

rect2.getArea = function () {
  return this.length * this.width
}

rect2.getPerimeter = function () {
  return 2 * this.length + 2 * this.width
}

document.write("<h2>" + rect2.length + "</h2>")
document.write("<h2>" + rect2.width + "</h2>")
document.write("<h2>" + rect2.getArea() + "</h2>")
document.write("<h2>" + rect2.getPerimeter() + "</h2>")
