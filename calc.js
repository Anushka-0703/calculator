const result = document.getElementById("inputBox");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const percentageBtn = document.getElementById("percentage");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const decimalBtn = document.getElementById("decimal");
const equalBtn = document.getElementById("equal");
const additionBtn = document.getElementById("addition");
const subtractionBtn = document.getElementById("subtraction");
const numberBtns = document.querySelectorAll(".number");

//Function to append number
const appendNumber = (number) => {

};

//Add eventListener to number buttons
numberBtns.forEach((button) => {
     button.addEventListener("click", () => {
          appendNumber(button.innerText);
     });
});
