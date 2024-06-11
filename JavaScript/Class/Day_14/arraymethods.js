let arr = new Array(1, 2, 3, 4, 53, 67, 7, 8, 93,44)
// document.write(`${arr}<br>`)

// join():
//     document.write(`${arr.join('')}<br>`) 
//          if we want to print array with the sign of miltiplication or addition or substraction or any  other sign like @, #, $, ^, & also we can do it with number '123456' or alpbhabets 'abcdef' 

//     document.write(`${arr.join('*')}<br>`) 
//         if we want to print it like with only 'space' we can do that so the thing is that we can add anything between 2 array elements/values

//     document.write(`${arr.join(' a ')}<br>`)



// push():
//  if we want to add any values at the end of an array then we can use push() method
//     arr.push(28, 10, 30)
//     document.write(`${arr.join("  ")}<br>`); 



// unshift():
// if we want to add any value at the beginning of the array then we can use unshift() method
//     arr.unshift(110, 120, 130)
//     document.write(`${arr.join(" ^ ")}<br>`); 



// pop(): 
// if we want to remove value from the ending of the array then we can use pop() method, it only removes only last value of array
//     arr.pop()
//     document.write(`${arr.join("  ")}<br>`); 



// shift(): 
// if we want to remove value from the beginning of the array then we can use the shift() method, it only removes only first value of array
//     arr.shift()
//     document.write(`${arr.join("  ")}<br>`); 



// splice(): 
// if we want to delete any value from the middle like from 120 130 1 2 3 4 28 10 i wanna delete 2 and also we can add values using splice()method
    arr.splice(3,1,44,212) 
        // in here 3 is index of number and 1 is how many values we want to delete and then the value you want to add

    // document.write(`${arr.join("  ")}<br>`); 



// reverse():
//  if we want to reverse our array like 1, 2, 3 if we use reverese in this then it changes like 3, 2, 1.
//     arr.reverse()
//     document.write(`${arr.join("  ")}<br>`); 
//     document.write(`${arr.reverse().join(" ")}<br>`); we can also write it like this this is the shorthand 


// slice(): 
// if we want take value form middle of array then we can use slice() e.g. 1, 2, 3, 4 we can take 2 and 4 from this array and if we want to show values between specific index 
// if we write -8, -3 then also it works
 document.write(`${arr.slice(2, 7)}`);
    let email = 'meetchudasama80@gamil.com'
    document.write(`${email.slice(0, -10)}`)



// indexOf(): 
// if we want to check the place of value in array then we can use indexof() in this the first value it get from array then it shows only that values place and if we have two same value in array and we want the second value from array then we can use lastIndexOf(), and if theres no value than it gave -1 as output
//     document.write(`${arr.indexOf(4)}<br>`);
//     document.write(`${arr.lastIndexOf(4)}<br>`);

// sort(): 
// it makes values to be in ascending order like 2,4,6,1,2,5 = 1,2,3,4,5,6
    // document.write(`${arr.sort()}<br>`)// it only checks the first digit of value

    // document.write(`${arr.sort((a, b) => a - b)}<br>`); // it checks the whole value in ascending order

    // document.write(`${arr.sort((a, b) => b - a)}<br>`);// descending order

//concat(): 
// if we want to merge two array with each other then we can use it
    // let arr1 = ['Chudasama']
    // let arr2 = ['Meet']
    //     document.write(`${arr1.concat(arr2).join(' ')}<br>`);

//toString(): 
// if we want to convert our array to string value
    // document.write(`${arr1.toString()}`) 

//includes(): 
// if we want to check the value isin array or not then we use includes(), It only gaves ans in true or falls
    // document.write(`${arr.includes(444)}`)
