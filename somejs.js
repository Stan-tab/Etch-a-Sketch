const mainBox = document.querySelector(".mainbox");
const button = document.createElement("button");
const body = document.querySelector("body");
const input = document.querySelector("input");
const colorInput = document.createElement("input");
let mouse = false;
let pixelArray;
let verList;
let userInput = 16;
button.textContent = "Change value";
colorInput.type = "color";
colorInput.value = "#008000";
colorInput.style.marginLeft = "5px"
body.insertBefore(colorInput, body.firstChild);
body.insertBefore(button, body.firstChild);

adder(16)

button.addEventListener("click", () => {
    const previousNumber = userInput;
    userInput = parseInt(prompt("Enter the value of the scetch size\ntill 100"));
    if (isNaN(userInput) || userInput > 100) {
        userInput = previousNumber;
        return;
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
    verList = [...document.querySelectorAll(".vertical")];
    listener(verList);
}

function listener(someArray) {
    someArray.forEach(yAciss => {
        pixelArray = [...yAciss.querySelectorAll("div")];
        pixelArray.forEach(pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = colorInput.value;
            })
            pixel.addEventListener("mouseover", () => {
                if (!mouse) {
                    return
                }
                pixel.style.backgroundColor = colorInput.value;
            })
        });
    });
}

window.addEventListener("mousedown", () => {
    mouse = true;
})

window.addEventListener("mouseup", () => {
    mouse = false;
})