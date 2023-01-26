console.log("welcome to JS")

// var abc = {
//   name: "venky",
//   subject: "JS",
//   Adress: "Banglore",
// }

// console.log(abc)

//constructor function
function xyz(name, subject, adress) {
  this.name = name
  this.subject = subject
  this.adress = adress
}
xyz.prototype.getName = function () {
  return this.name
}

xyz.prototype.getAdress = function () {
  return this.adress
}
//js prototype property allow us to add new properties or method to a obj constructor
xyz.grades = "A"
xyz.prototype.grades = "A"
var x1 = new xyz("Venky", "java", "earth")

var x2 = new xyz("prasad", "cpp", "mars")
console.log(x1)
