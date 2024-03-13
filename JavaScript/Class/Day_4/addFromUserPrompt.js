
// When we use promt it returns string value, For that we use parseInt It converts string into Integer
// For convert string into Integer we use - Number / parseInt
// In JavaScript we write functions into camelCase only like - addTwoNumbers, valueByUser etc.....

function addNumbersByUsers(){
    let a = parseInt(window.prompt("Enter First Value: ",0)) // parseInt("10") => 2, parseInt allows only number like 1, 300, 2332, if there is have 10.22 then it consider only 10 it not allow .22  ..etc 
    let b = Number(prompt("Enter Second Value: ",0 )) //,0 is a default value // "20" Number allow all kind of numbers like 12, 1000, 10.22 ...etc
    // alert(a + b) 
    document.write(`Addition = ${a + b}`)
}
