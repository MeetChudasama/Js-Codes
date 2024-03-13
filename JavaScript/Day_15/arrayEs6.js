let arr = new Array(1, 3, 5, 7, 88, 45,28)
let arrr = new Array('Meet', 'Vimal', 'Dhyana', 'Priyanshi')
let res = document.getElementById('result')

let foreachdemo=()=>{
    arr.forEach((val, i)=> res.innerHTML+=`${val}<br>`)
}
// forEach(): uses to work on any single Value of an array it only fetch value but did not do any changes

let mapdemo=()=>{
    let arr1 = arr.map((item)=>item+5)
    // res.innerHTML = `${arr} and ${arr1}` // we can also print array like this
    res.innerHTML = arr.map((item)=>Math.sqrt(item)) // like this to
}
//map(): if we want to add or substract or multilpy or divison an whole array and if we want to make new array using an exsting array then we can use it we can also use it with Math object

let filterdemo=()=>{
    let arr1 = arr.filter((item)=>item > 3)
    res.innerHTML = `${arr} and ${arr1}`; 
}
//filter(): if we want any value greater than 3 then we can use filter  we can use any number

let somedemo=()=>{
    res.innerHTML = arr.some((item)=> item > 3)
    // res.innerHTML = arrr.some((item)=> item.length < 2)
}
//some(): if we want value greaterthan 3 then we can use it & if we want to know that is there have any string which length is greaterthan 4 for that we can use it & In this function condition given by us is correct for anyone of the values stored in the array than it'll return true.

let everydemo=()=>{
    res.innerHTML = arr.every((item) => item > 3);
    // res.innerHTML = arrr.every((item) => item.length > 3);

}
//every(): its just like some but it checks the all valiue of array then it gaves output if every value match the condition than it gaves true otehrwise false]

let finddemo=()=>{
    res.innerHTML = arr.find((item) => item == 2);
}
//find(): if we want to find that any value is exist in array than we can use find() if it matches than it gave value it self or undefined

let findindexdemo=()=>{
    res.innerHTML = arr.findIndex((item) => item == 3);
}
//findIndex():if we know the value and we want to know its index we use it

let reducedemo=()=>{
    res.innerHTML = arr.reduce((a,b) => a+b);
}
//reduce():if we want another value based on our existing value than we can use it.
    /*
        1, 3, 5, 7, 88, 45,28
        a = 1 b = 3 => 4
        a = 4 b = 5 => 9
        a = 9 b = 7 => 16
        a = 16 b = 88 => 104
        a = 104 b = 45 => 149
        a = 149 b = 28 => 177
    */
let reducerightdemo=()=>{
    res.innerHTML = arr.reduce((a,b) => a+b);
}
//reduceright(): it's same as reduce() but it starts from right to left
    /*
        1, 3, 5, 7, 88, 45,28
        a = 28 b = 45 => 73
        a = 73 b = 88 => 161
        a = 161 b = 7 => 168
        a = 168 b = 5 => 173
        a = 173 b = 3 => 176
        a = 176 b = 1 => 177
    */

let flatdemo = () => {
    // let a = [2, 4, [3, 5, 6], 28, 76]
    // let b = a.flat(1)
    let c = [2,4,5[[[[[2,45,67]]]]],24,[[[[[[34]]]]]]]
    let d = c.flat(Infinity)
  res.innerHTML = `${d}`
};
//flat(): if we want to convert 2D Array or multidimensional array into 1D or single array than we can use it
