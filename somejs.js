const body = document.querySelector("body")
const mainBox = document.querySelector(".mainbox");
const sizer = document.createElement("button");
const gridSize = document.createElement("input");
const colorInput = document.createElement("input");
const rainbow = document.createElement("button");
const remover = document.createElement("button");
let tapped = false;
let previous = 16;
let color = "#000000";
let actualValue = 16;
let lgbt;
let clicked;

gridSize.type = "text";
gridSize.style.width = "120px";
gridSize.style.marginBottom = "5px";
sizer.textContent = "Size";
remover.textContent = "Remove"
colorInput.value = "#000000";
colorInput.type = "color";
colorInput.style.margin = "5px";
rainbow.textContent = "Rainbow";
rainbow.value = "#ff80ff";
rainbow.style.marginBottom = "5px";

body.insertBefore(rainbow, body.firstChild);
body.insertBefore(colorInput, body.firstChild);
body.insertBefore(remover, body.firstChild);
body.insertBefore(sizer, body.firstChild);
body.insertBefore(gridSize, body.firstChild);

function makingGrid(size) {
    let div;
    mainBox.replaceChildren("")
    for (let i=0; i<size; i++){
        div = document.createElement("div");
        div.classList = "y";
        mainBox.appendChild(div);
    }
    const list = [...mainBox.querySelectorAll(".y")];
    list.forEach(vertical => {
        for (let i =0; i<size; i++){
            const pixel = document.createElement("div");
            vertical.appendChild(pixel);
        }
    })
    listening();
}

function listening() {
    const pixels = [...mainBox.querySelectorAll(".y > div")];
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            if (tapped == true) {
                pixel.style.backgroundColor = colorDesider();
            }
        })
        pixel.addEventListener("mousedown", () => {
            pixel.style.backgroundColor = colorDesider();
        })
    })
}

function colorDesider() {
    if (color != colorInput.value || isNaN(clicked)) {
        clicked = NaN;
        color = colorInput.value;
        return colorInput.value;
    }
    if (clicked == 1) {
        lgbt = `rgb(${randomNumber(226)}, ${randomNumber(226)}, ${randomNumber(226)})`
        return lgbt;
    }
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

sizer.addEventListener("click", () =>{
    actualValue = parseInt(gridSize.value);
    if (!Number.isInteger(actualValue) || actualValue > 100) {
        gridSize.value = "";
        return
    }
    makingGrid(actualValue);
    gridSize.value = "";
})

rainbow.addEventListener("click", () => {
    clicked = 1;
});

remover.addEventListener("click", () => {
    mainBox.replaceChildren("");
    makingGrid(actualValue);
})

mainBox.addEventListener("mousedown", () => {
    tapped = true;
})
mainBox.addEventListener("mouseup", () => {
    tapped = false;
})
makingGrid(16);