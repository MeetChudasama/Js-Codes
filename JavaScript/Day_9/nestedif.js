// Regular function = function nest(){}

// Function Expression
let nested = function () {
  let nest = Number(document.getElementById("nest").value);
  let result = document.getElementById("result");
  // if(nest > 0){
  //     result.innerHTML = 'number is Positive'
  // }
  // else{
  //     result.innerHTML = ' number is Negative '
  // }

  if (nest > 0) {
    result.innerHTML = "Positive";  //if the number is not > 20 than it will not work otw it will work
      result.style.color = "green";
        if (nest >= 20) {
          if (nest % 5 == 0) 
            result.innerHTML = "Number is Divisible By 5";
          else 
            result.innerHTML = "Number is Not Divisible By 5";
            result.style.color = "red";
        } 
        else{}
  } 
  else{ /*result.innerHTML = "Negative";*/ }
}
