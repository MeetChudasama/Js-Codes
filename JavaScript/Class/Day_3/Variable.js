
// When variables value is not defined the it shows "Undefined" in the ouyput

var a = 7788
var b

// document.write(`a = ${a}<br>`)
// document.write(b)

b = 5566
document.write("a = " + a + " and b = " + b + "<br> Addition is = " + (a + b) + "<br><br>")    // its very difficult remember when and we need double inverted coma and plus sign etc...
document.write(`a = ${a} and b = ${b} <br> Substraction is = ${a - b} <br><br><br>`)    //Its easy to remember than plus one

var c
document.write(`Item = ${c} & Data Type = ${typeof (c)}<br><br>`)
c = 10
document.write(`item= ${c} & Data Type = ${typeof (c)}<br><br>`)
c = "Meet"
document.write(`item = ${c} & Data Type = ${typeof (c)}<br><br>`)
c = 28.01
document.write(`item = ${c} & Data Type = ${typeof (c)}<br><br>`)
c = true
document.write(`item = ${c} & Data Type = ${typeof (c)}<br><br>`)
c = null
document.write(`item = ${c} & Data Type = ${typeof (c)}<br><br>`)