// var str1 = new String()
// document.write(typeof str1)//obj

// literal objects
var car = {
  car_manfacturer: "Audi",
  car_model: "Q7",
  price: "500000",
  allwheeldrive: function () {
    document.write("This car comes with four wheel drive")
  },
}
car.allwheeldrive()
car.car_color = "Black"
document.write(car.car_color)
car.newfun = function () {
  return "function added"
}

document.write(car.newfun())
delete car.car_model //delete
document.write(car.car_model)

car.price = "70000" // update
document.write(typeof car.price)

//document.write("<h1>" + car.allwheeldrive() + "</h1>")
// var car_manfacturer = "Audi"
// var car_model = "Q7"
// var price = "500000"

// function allwheeldrive() {
//   document.write("This car comes with Quattro all-wheel")
// }
// allwheeldrive()

// object constuctor
//constructor function

// function cars(car_manfacturer, car_model, price) {
//   this.car_manfacturer = car_manfacturer
//   this.car_model = car_model
//   this.price = price
//   this.allwheeldrive = function () {
//     document.write("<h2>This car comes with four wheel drive</h2>")
//   }
// }
// var c1 = new cars("Audi", "Q7", 50000)
// c1.allwheeldrive()
// var c2 = new cars("BMW", "X7", 40000)
// document.write(c2.car_manfacturer)
