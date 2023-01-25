// var cars = ["Honda", "Kia", "Ford"]

// document.write("<h1>" + cars + "</h1>")
// for (var i = 0; i < 3; i++) {
//   document.write("<h1>" + cars[i] + "</h1>")
// }
///less recommended
// var fruits = new Array("Apple", "Banana", "Mango")
// for (var i = 0; i < 3; i++) {
//   document.write("<h1>" + fruits[i] + "</h1>")
// }
// var car1 = "Honda"
// var car2 = "Kia"
// var car3 = "Ford"

// document.write(car1)
// document.write(car2)
// document.write(car3)

//methods in array
var cars = ["Honda", "Kia", "Ford"]
cars.push("Nissan")
cars.pop()
cars.pop()
cars.push("Hyundai")
cars.push(20)
for (var i = 0; i < cars.length; i++) {
  document.write("<h1>" + cars[i] + "</h1>")
}
