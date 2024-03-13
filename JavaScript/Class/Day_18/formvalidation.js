let unameerr = true,
  emailerr = true,
  mobileerr = true,
  doberr = true,
  pwderr = true,
  cpwderr = true,
  generr = true,
  hobbyerr = true,
  cityerr = true;

let checkUsername = () => {
  let username = document.getElementById("username").value;
  let msg = document.getElementById("msg");
  let pattern = /^[a-zA-Z]+$/; //regular expressions
  if (username == "") {
    msg.innerHTML = "Fill Username";
    unameerr = true;
  } else if (!pattern.test(username)) {
    msg.innerHTML = "Username should have only alphabets";
    unameerr = true;
  } else {
    msg.innerHTML = "";
    unameerr = false;
  }
};

let checkEmail = () => {
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg1");
  let pattern = /^([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-zA-Z]{3})$/;
  if (email == "") {
    msg.innerHTML = "Fill Email";
    emailerr = true;
  } else if (!pattern.test(email)) {
    msg.innerHTML = "Correct the Email Format";
    emailerr = true;
  } else {
    msg.innerHTML = "";
    emailerr = false;
  }
};

let checkMobile = () => {
  let mobile = document.getElementById("mobile").value;
  let msg = document.getElementById("msg2");
  let pattern = /^[0-9]{10}$/;
  if (mobile == "") {
    msg.innerHTML = "Fill Mobile";
    mobileerr = true;
  } else if (!mobile.match(pattern)) {
    msg.innerHTML = "Mobile should have only Numbers";
    mobileerr = true;
  } else {
    msg.innerHTML = "";
    mobileerr = false;
  }
};

let checkPwd = () => {
  let pwd = document.getElementById("password").value;
  let msg = document.getElementById("msg4");
  if (pwd == "") {
    msg.innerHTML = `Fill Password`;
    pwderr = true;
  } else {
    msg.innerHTML = "";
    pwderr = false;
  }
};

let showHide = () => {
  let pwd = document.getElementById("password");
  let icon = document.getElementById("icon");
  if (pwd.type == "password") {
    pwd.type = "text";
    icon.innerHTML = `<i class="fa-solid fa-eye"></i> `;
  } else if (pwd.type == "text") {
    pwd.type = "password";
    icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
};

let checkConfirmPassword = () => {
  let pwd = document.getElementById("password").value;
  let cpwd = document.getElementById("cpassword").value;
  let msg = document.getElementById("msg5");
  if (cpwd == "" || cpwd != pwd) {
    msg.innerHTML = `Password is not correct`;
    cpwderr = true;
  } else {
    msg.innerHTML = "";
    cpwderr = false;
  }
};

let checkGender = () => {
  let gen = document.getElementsByName("gen");
  let msg = document.getElementById("msg6");
  let gender = false;
  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      gender = true;
    }
  }
  if (gender == false) {
    msg.innerHTML = "Select Gender";
    generr = true;
  } else {
    msg.innerHTML = "";
    generr = false;
  }
};

let checkHobbies = () => {
  let hobby = document.getElementsByName("hobbies");
  let msg = document.getElementById("msg7");
  let hobbie = false;
  for (let i = 0; i < hobby.length; i++) {
    if (hobby[i].checked) {
      hobbie = true;
    }
  }
  if (hobbie == false) {
    msg.innerHTML = `Select Hobbies`;
    hobbyerr = true;
  } else {
    msg.innerHTML = "";
    hobbyerr = false;
  }
};

let selectCity = () => {
  let city = document.getElementById("city").value;
  let msg = document.getElementById("msg8");
  let othercity = document.getElementById("othercity");
  if (city == "") {
    msg.innerHTML = `Select City`;
    othercity.style.display = "none";
    cityerr = true;
  } else if (city == "Other") {
    othercity.style.display = "inline-block";
    othercity.focus();
    othercity.onblur = () => {
      if (othercity.value == "") {
        msg.innerHTML = "Enter City";
        cityerr = true;
      } else {
        msg.innerHTML = "";
        cityerr = false;
      }
    };
  } else {
    msg.innerHTML = "";
    othercity.style.display = "none";
    cityerr = false;
  }
};

// document.getElementById('username').onblur=checkUsername

let handleSubmit = (e) => {
  console.log(unameerr);
  console.log(emailerr);
  console.log(mobileerr);
  console.log(pwderr);
  console.log(cpwderr);
  console.log(generr);
  console.log(hobbyerr);
  console.log(cityerr);

  checkUsername();
  checkEmail();
  checkMobile();
  checkPwd();
  checkConfirmPassword();
  checkGender();
  checkHobbies();
  selectCity();

  if (
    unameerr == true ||
    emailerr == true ||
    mobileerr == true ||
    pwderr == true ||
    cpwderr == true ||
    generr == true ||
    hobbyerr == true ||
    cityerr == true
  ) {
    e.preventDefault();
  } else {
    alert("Form has been Submitted");
    console.log("meet");
  }
};
