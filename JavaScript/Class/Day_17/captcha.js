let generateCaptcha = () => {
  let captcha = "";
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 1; i <= 6; i++) {
    captcha += `${str.charAt(Math.floor(Math.random() * str.length))}`;
  }
  document.getElementById("btn-cap").innerHTML = captcha;
};

let checkCaptcha = () => {
  let text = removeSpaces(document.getElementById("cap").value);
  let btn = removeSpaces(document.getElementById("btn-cap").innerHTML);
  let err = document.getElementById("err");
  if (text == "" || text != btn) {
    err.innerHTML = "Chhiiiiii Thooooooo";
    err.style.color = "red";
    generateCaptcha();
  } else {
    err.innerHTML = "Haan Yeh Huyi na Baat";
    err.style.color = "green";
  }
};

let removeSpaces = (str) => str.split(" ").join("");

