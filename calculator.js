const content = document.querySelector("#content");

function loadCalculator() {
    // make buttons & assign functions

    const displays = document.createElement('div');
    displays.style.display = 'flex';
    displays.setAttribute('id', 'displays');
    displays.style.padding = '40px 20px';
    displays.style.gap = '10px';
    content.appendChild(displays);
    
    for (let i = 0; i < 4; i++) {
        const dsplyTile = document.createElement('div');
        dsplyTile.classList.add('dsplyTile');
        dsplyTile.style.width = '100px';
        dsplyTile.style.height = '30px';
        dsplyTile.style.alignContent = 'center';
        dsplyTile.setAttribute('id',`display${i+1}`);
        dsplyTile.style.textAlign = 'center';
        dsplyTile.style.border = '2px solid black';
        dsplyTile.style.borderRadius = '5px';
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
        btnOp.addEventListener('click', () => updateOperator(btnOp.textContent));
        operator.appendChild(btnOp);
    }

    const bottomButtons = document.createElement('div');
    bottomButtons.style.display = 'flex';
    bottomButtons.setAttribute('id', 'bottomButtons');
    bottomButtons.style.justifyContent = 'center';
    bottomButtons.style.margin = '10px';
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
            if ((i == 3) && (j == 0)) {
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
            btnNum.addEventListener('click', () => {
                updateDisplay(btnNum.textContent);
            });
            tile.appendChild(btnNum);
        }
    }

    const btnEnter = document.createElement('button');
    btnEnter.textContent = "=";
    btnEnter.style.width = '50px';
    btnEnter.style.height = 50*4 + 10*3 + 'px';
    btnEnter.addEventListener('click',() => calculate());
    enterDiv.appendChild(btnEnter);

    const clearDiv = document.createElement('div');
    content.appendChild(clearDiv);

    const btnClear = document.createElement('button');
    btnClear.textContent = 'Clear';
    btnClear.style.width = 50*4 + 10*3 + 'px';
    btnClear.style.height = '50px';
    btnClear.addEventListener('click', () => clearDisplay());
    clearDiv.appendChild(btnClear);
}

function updateDisplay(input) {
    // limits: 10 characters or less, only one decimal

    const displayOp = document.querySelector('#display2');
    const display1 = document.querySelector('#display1');
    const display3 = document.querySelector('#display3');

    if (displayOp.textContent == "") {
        if ((input == '.') && display1.textContent.indexOf('.') >= 0) {
            // do nothing
        } else if (display1.textContent.length < 10) {
            display1.textContent += input;
        }
    } else {
        if ((input == '.') && display3.textContent.indexOf('.') >= 0) {
            // do nothing
        } else if (display3.textContent.length < 10) {
            display3.textContent += input;
        }
    }
}

function updateOperator(input) {
    document.querySelector('#display2').textContent = input;
}

function clearDisplay() {
    for (let i = 0; i < 4; i++) {
        document.querySelector(`#display${i+1}`).textContent = "";
    }
}

function calculate() {
    // call function based on operator
    const displayOp = document.querySelector('#display2');
    const display1 = document.querySelector('#display1');
    const display3 = document.querySelector('#display3');
    const display4 = document.querySelector('#display4');

    if ((display1.textContent == '') ||
        (displayOp.textContent == '') ||
        (display3.textContent == '')) {
        alert('Missing input');
        return;
    }

    if (displayOp.textContent == '+') {
        let answer = add(display1.textContent, display3.textContent);
        display4.textContent = answer;
    } else if (displayOp.textContent == '-') {
        // sub
    } else if (displayOp.textContent == '*') {
        // multiply
    } else if (displayOp.textContent == '/') {
        //divide
    }
    // update display4
}

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    // check for divide by zero
    return x / y;
}

loadCalculator();