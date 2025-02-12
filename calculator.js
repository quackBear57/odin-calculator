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
        // dsplyTile.textContent = `dsply${i+1}`;
        dsplyTile.setAttribute('id',`display${i+1}`);
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
    // check for input:
    //  not more than one decimal
    //  which display to update based on operator
    if (document.querySelector('#display2').textContent == "") {
        // check for decimal
        
        // update display1
        document.querySelector('#display1').textContent += input;
    } else {
        // check for decimal
        // update display3
    }
    // alert(input);
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

    // update display4
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
    // check for divide by zero
    return x / y;
}

loadCalculator();