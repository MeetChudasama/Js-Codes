let checkPrime=()=>{
    let num1 = Number(document.getElementById('num1').value)
    let res = document.getElementById('res')
    let flag = 0
    for(let i= 2; i< num1; i++){
        if(num1 % i == 0){
            flag = 1
            break
        }
    }
    if(flag== 0){
        res.innerHTML = ('Number is Prime')
    }
    else{
    res.innerHTML = ('Number is Not Prime')
}
}