const content = document.querySelector("#content");

function loadCalculator() {
    // make buttons & assign functions

    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        content.appendChild(row);
        
        for (let j = 0; j < 4; j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.minHeight = '60px';
            tile.style.minWidth = '60px';
            row.appendChild(tile);

            //add buttons
            let button = document.createElement('btn');
            button.textContent = i + 1 + j * 3;
            tile.appendChild(button);
        }
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

loadCalculator();