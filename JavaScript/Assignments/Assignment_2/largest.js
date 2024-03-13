let largest = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let res = document.getElementById("result");

  if (num1 > num2 && num1 > num3) {
    res.innerHTML = `${num1} is greater`;
  } else if (num2 > num3 && num2 > num1) {
    res.innerHTML = `${num2} is greater`;
  } else {
    res.innerHTML = `${num3} is greater`;
  }
};
