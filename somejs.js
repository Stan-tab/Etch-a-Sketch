const mainBox = document.querySelector(".mainbox");
const button = document.createElement("button");
const body = document.querySelector("body");
let userInput = 16;

button.textContent = "Change value";
body.insertBefore(button, body.firstChild);

adder(16)

button.addEventListener("click", () => {
    const previousNumber = userInput;
    userInput = parseInt(prompt("Enter the value of the scetch size\ntill 100"));
    if (isNaN(userInput) || userInput > 100) {
        userInput = previousNumber;
    }
    adder(userInput);
})

function adder(num) {
    mainBox.replaceChildren("");
    for (let i = 0; i<num; i++){
        const yAciss = document.createElement("div");
        yAciss.classList.add("vertical");
        for (let l = 0; l < num; l++) {
            yAciss.appendChild(document.createElement("div"));
        }
        mainBox.appendChild(yAciss)
    }
}