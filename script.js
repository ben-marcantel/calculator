let number1 = document.getElementById("number1");
let number2 =document.getElementById("number2");
let output = document.getElementById("output");
let clear = document.getElementById("clear");

const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const  division = document.getElementById("divide");

const calculator = document.getElementById("calculate")


clear.addEventListener("click", ()=>{
    number1.value = "";
    number2.value = "";
    output.innerHTML ="";
});

function add(number1, number2) {
    return number1 + number2
};

function sub(number1, number2){
    return number1 - number2
};

function multi(number1, number2){
    return number1 * number2;    
};

 function div(number1, number2){
    return number1/number2
};

function calculate(number1, number2, func) {
    return func(number1, number2);
  };
  

  function outputCalculation(value) {
    output.innerHTML = value;
  }
  
  
 addition.addEventListener("click", function() {
    let result = calculate(+number1.value, +number2.value, add);
    outputCalculation(result);
  });

  subtraction.addEventListener("click", function() {
    let result = calculate(+number1.value, +number2.value, sub);
    outputCalculation(result);
  });

multiplication.addEventListener("click", function() {
    let result = calculate(+number1.value, +number2.value, multi);
    outputCalculation(result);
  });

  division.addEventListener("click", function() {
    let result = calculate(+number1.value, +number2.value, div);
    outputCalculation(result);
  });