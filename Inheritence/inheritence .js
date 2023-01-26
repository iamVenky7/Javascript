const Employee = {
  Post: function () {
    return "A software developer"
  },
  changeName: function (name) {
    this.name = name
  },
}

// var E1 = Object.create(Employee)
// E1.name = "venky"
// E1.role = "writer"
// E1.changeName("prasad")
// console.log(E1)

// var E1 = Object.create(Employee, {
//   name: { value: "Venky", writable: true },
//   role: { value: "programmer" },
// })
// E1.changeName("Ram")
// console.log(E1)

function employee(name, id, salary) {
  this.name = name
  this.id = id
  this.salary = salary
}

employee.prototype.Post = function () {
  return this.name + " " + "is a content creator"
}

var venky = new employee("venky", 123, 23000)
console.log(venky)

function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary)
  this.language = language
}
