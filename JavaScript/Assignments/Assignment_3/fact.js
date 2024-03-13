let factorial = () => {
  let num = Number(document.getElementById("num1").value);
  let num2 = (document.getElementById('num2'))
  let f = 1;
  for (let i = num; i >= 1; i--) {
    f*=i
  }
  num2.value = f

};
