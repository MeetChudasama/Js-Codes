// else if ladder Syntax =
//     if(){}
//     else if(){}
//     else if(){}
//     else{}

document.getElementById("btn").onclick = function () {
  let per = Number(document.getElementById("per").value);
  let result = document.getElementById("result");

  if (per >= 60 && per <= 100) {
    result.style.color = "green";
    result.innerHTML = `Grade I`;
  } 
  else if (per >= 50 && per <= 60) {
    result.style.color = "blue"
    result.innerHTML = `Grade II`;
  } 
  else if (per >= 36 && per <= 50) {
    result.innerHTML = `Grade III`;
    result.style.color = "orange"
  } 
  else {
    result.style.color = "red";
    result.innerHTML = `FAIL`;
  }
};
