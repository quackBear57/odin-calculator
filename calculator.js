const content = document.querySelector("#content");

function loadCalculator() {
    // make buttons & assign functions

    const displays = document.createElement('div');
    displays.style.display = 'flex';
    displays.setAttribute('id', 'displays');
    displays.style.padding = '40px 20px';
    content.appendChild(displays);
    
    for (let i = 0; i < 4; i++) {
        const dsplyTile = document.createElement('div');
        dsplyTile.classList.add('dsplyTile');
        dsplyTile.style.width = '100px';
        dsplyTile.textContent = `dsply${i}`;
        dsplyTile.style.textAlign = 'center';
        displays.appendChild(dsplyTile);
    }

    const operators = document.createElement('div');
    operators.style.display = 'flex';
    operators.style.justifyContent = 'center';
    operators.style.margin = '10px';
    operators.style.gap = '10px';
    operators.setAttribute('id', 'operators');
    content.appendChild(operators);

    for (let i = 0; i < 4; i++) {
        const operator = document.createElement('div');
        operator.classList.add('operator');
        // operator.style.minHeight = '60px';
        // operator.style.minWidth = '60px';
        operators.appendChild(operator);
        
        const btnOp = document.createElement('button');
        btnOp.style.width = '50px';
        btnOp.style.height = '50px';
        if (i == 0) {
            btnOp.textContent = '+';
        } else if (i == 1) {
            btnOp.textContent = '-';
        } else if (i == 2) {
            btnOp.textContent = "*";
        } else {
            btnOp.textContent = "/";
        }
        operator.appendChild(btnOp);
    }

    const bottomButtons = document.createElement('div');
    bottomButtons.style.display = 'flex';
    bottomButtons.setAttribute('id', 'bottomButtons');
    bottomButtons.style.justifyContent = 'center';
    bottomButtons.style.margin = '10px';
    // bottomButtons.style.gap = '10px';
    content.appendChild(bottomButtons);

    const numbers = document.createElement('div');
    numbers.setAttribute('id', 'numbers');
    bottomButtons.appendChild(numbers);

    const enterDiv = document.createElement('div');
    enterDiv.setAttribute('id', 'enter');
    enterDiv.style.margin = '10px 10px 10px 0';
    enterDiv.style.justifyContent = 'center';
    bottomButtons.appendChild(enterDiv);

    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.classList.add("numRow");
        row.style.display = "flex";
        row.style.margin = '10px';
        row.style.gap = '10px';
        numbers.appendChild(row);
        
        for (let j = 0; j < 3; j++) {
            const tile = document.createElement("div");
            tile.classList.add("numTile");
            row.appendChild(tile);

            const btnNum = document.createElement('button');
            if ((i == 3) && (j == 0)){
                btnNum.textContent = '';
            } else if ((i == 3) && (j == 1)) {
                btnNum.textContent = '0';
            } else if ((i == 3) && (j == 2)) {
                btnNum.textContent = '.';
            } else {
                btnNum.textContent = i * 3 + j + 1;
            }
            btnNum.style.width = '50px';
            btnNum.style.height = '50px';
            tile.appendChild(btnNum);
        }
    }

    const btnEnter = document.createElement('button');
    btnEnter.textContent = "=";
    btnEnter.style.width = '50px';
    btnEnter.style.height = 50*4 + 10*3 + 'px';
    enterDiv.appendChild(btnEnter);

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