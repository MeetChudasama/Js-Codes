function simple(){
    let p = Number(document.getElementById('principal').value)
    let t = Number(document.getElementById('time').value)
    let r = Number(document.getElementById('rate').value)
    let si = p * t * r / 100
    document.getElementById('result').value = `${si}`

}

function compound(){
    let p = Number(document.getElementById('principal').value)
    let t = Number(document.getElementById('time').value)
    let r = Number(document.getElementById('rate').value)
    let ci = (p*(1 + r/100)**t)
    document.getElementById('result').value = `${ci - p}`

}
