// var x = "Hi there"
// document.write(x, "<br>")
// document.write(typeof x)

// document.write("Hi there... <br> Welcome to JS")
// //Escape sequence
// document.write('Hi there "Welcome" to Js')

// document.write("It's Alright")

// document.write("The charecter \\ is called blackslash")

//STRING METHODS
//length
// var str = "Welcome to JavaScript"
// var a = str.length //it include spaces
// document.write(a) //21 incl spaces

// //toLowerCase & toUpperCase

// var b = str.toLowerCase()
// document.write(b)
// var b = str.toUpperCase()
// document.write(b)

//includes() - return boolean value
// var c = str.includes("script")
// document.write(c)

//startswith and endswith - return boolean value
//used to check intial and final words
// var a = str.startsWith("Wel")
// document.write(a)
// var b = str.startsWith("pt")
// document.write(b)

//Search
// var a = str.search("to")
// document.write(a)

//works  both same
//indexOf
// var a = str.indexOf("Ja")
// document.write(a)

//lastIndexOf

// var name = "my name is venkatesh"
// var a = name.lastIndexOf("name")
// document.write(a)

//replace()
// var k = str.replace("to", "from")
// var s = str.replace(/to/g, "from")
// document.write("<h>" + s + "</h>")

//concat
// var str1 = " Happy"
// var s = str.concat(str1)
// document.write(s)

//split - bbreak into pieces - replace with commas
// var d = str.split(" ")
// document.write(d)

//repeat -
// var d = str.repeat(5)
// document.write("<h1>" + d + "</h1>")

var str = "Welcome to JavaScript"

//slice
// var d = str.slice(12, str.length) || slice(-5)
// document.write(d)

//substr

// var d = str.substr(11, 4) // 2nd indicate 4 charecters from 11
// document.write(d)

//substring
var d = str.substring(2, 7)
document.write(d)
