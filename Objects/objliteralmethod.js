// defined as  , seperated list of name value pairs
// wrpping up of data {}
//Advantage
// we dont hav to create empty Object

var rect1 = {
  length: 5,
  width: 10,
  getArea: function () {
    return this.length * this.width
  },
  getParameter: function () {
    return 2 * this.length + 2 * this.width
  },
}

document.write("<h2>" + rect1.length + "</h2>")
document.write("<h2>" + rect1.width + "</h2>")
document.write("<h2>" + rect1.getArea() + "</h2>")
document.write("<h2>" + rect1.getParameter() + "</h2>")
