const resultScore = document.querySelector(".result");
const historyScore = document.querySelector('.history');
let display = document.querySelector(".calculate");

//[TODO]  console.log(display);
let digitsObjectsArray = [
  {
    class: ".nine",
    digit: "9",
  },
  {
    class: ".eight",
    digit: "8",
  },
  {
    class: ".seven",
    digit: "7",
  },
  {
    class: ".six",
    digit: "6",
  },
  {
    class: ".five",
    digit: "5",
  },
  {
    class: ".four",
    digit: "4",
  },
  {
    class: ".three",
    digit: "3",
  },
  {
    class: ".two",
    digit: "2",
  },
  {
    class: ".one",
    digit: "1",
  },
  {
    class: ".zero",
    digit: "0",
  },
  {
    class: ".point",
    digit: ".",
  },
  {
    class: ".divide",
    digit: "/",
  },
  {
    class: ".multple",
    digit: "*",
  },
  {
    class: ".add",
    digit: "+",
  },
  {
    class: ".subtract",
    digit: "-",
  },
];

for (let i = 0; i < digitsObjectsArray.length; i++) {
  const digitObject = digitsObjectsArray[i];
  console.log(digitObject);
  domButton(digitObject);
}

function domButton(arg) {
  document.querySelector(arg.class).addEventListener("click", () => {
    displayCalculation(arg.digit);
    console.log("hi");
  });
}

function displayCalculation(input) {
  display.value += input;
  console.log(display.value);
 
}

function calculate() {
  if (display.value === "") {
    resultScore.value = 'Error';
  }else{
    resultScore.value = eval(display.value);
  }
  

  // console.log(resultScore.value);
 
}

function reset() {
  historyScore.value = display.value;
  display.value = "";
  resultScore.value = 0;
  
}
function clearDisplay() {
  let deleted = display.value;
  let newClear = deleted.split("");
  newClear.pop();
  newClear.join("and");
  console.log(newClear.join(""));
  display.value = newClear.join("");
}
function percentage() {
  if (display.value === '') {
    resultScore.value = 'Error'
  }else{
  resultScore.value = eval(display.value) / 100;
}
}
document.querySelector(".On").addEventListener("click", () => {
  reset();
});
document.querySelector(".clear").addEventListener("click", () => {
  clearDisplay();
  console.log("hello");
});
document.querySelector(".eval, eval1").addEventListener("click", () => {
  calculate();
});
document.querySelector(".eval1").addEventListener("click", () => {
  calculate();
});


document.querySelector(".percentage").addEventListener("click", () => {
  percentage();
});
