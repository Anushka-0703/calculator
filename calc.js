let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
     button.addEventListener("click", (e) => {
          if (e.target.innerHTML === "=") {
               try {
                    string = eval(string);
                    display.value = string;
               } catch {
                    display.value = "Error";
               }
          } else if (e.target.innerHTML === "AC") {
               string = "";
               display.value = string;
          } else if (e.target.innerHTML === "DEL") {
               string = string.slice(0, -1);
               display.value = string;
          } else {
               string += e.target.innerHTML;
               display.value = string;
          }
     });
});
