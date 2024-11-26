const mainBox = document.querySelector(".mainbox");
const button = document.createElement("button");
const body = document.querySelector("body");
let userInput = 16;

button.textContent = "Change value";
body.insertBefore(button, body.firstChild);

button.addEventListener("click", () => {
    const previousNumber = userInput;
    userInput = parseInt(prompt("Enter the value of the scetch size\ntill 100"));
    if (isNaN(userInput)) {
        userInput = previousNumber;
    }
})

for (let i = 0; i<userInput**2; i++){
    mainBox.appendChild(document.createElement("div"));
}