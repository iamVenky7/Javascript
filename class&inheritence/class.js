//classes are ntg but a template used for creating objects in js
//Inheritence is the procedure through which one class inherits the properties and methods of another class

class Student {
  constructor(name, age, roll) {
    this.name = name
    this.age = age
    this.roll = roll
  }
  Org() {
    return "I am" + this.name + " learning JS"
  }
  dob() {
    return "the date of birth of " + this.name + " is" + (2023 - this.age)
  }

  static add(a, b) {
    return a + b
  }
}

// var venky = new Student("venky", 23, 24)
// console.log(venky)
// console.log(Student.add(10, 45))

//super refers to parent
class Student2 extends Student {
  constructor(name, age, roll, language, section) {
    super(name, age, roll)
    this.language = language
    this.section = section
  }
}

var prasad = new Student2("prasad", 26, 45000, "JS", "A")
console.log(prasad)
console.log(Student.add(2, 5))
