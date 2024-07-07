let display = document.getElementById('display');
let historyContainer = document.getElementById('historyContainer');
let currentExpression = '';
let memory = 0;
let calculation = []; 

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

function appendDot() {
    if (!currentExpression.includes('.')) {
        currentExpression += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        console.log(currentExpression);
        addHistory(currentExpression + ' = ' + result);
        addResult(result);
        currentExpression = result.toString();
        updateDisplay();
    } catch {
        currentExpression = 'Error';
        updateDisplay();
        currentExpression = '';
    }
}

function addHistory(entry) {
    const historyEntry = document.createElement('p');
    historyEntry.textContent = entry;
    historyContainer.appendChild(historyEntry);
}

function toggleHistory() {
    historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
}

function updateDisplay() {
    display.textContent = currentExpression || '0';
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentExpression += memory;
    updateDisplay();
}

function memoryAdd() {
    memory += eval(currentExpression);
    currentExpression = '';
    updateDisplay();
}

function memorySubtract() {
    memory -= eval(currentExpression);
    currentExpression = '';
    updateDisplay();
}

function appendFunction(func) {
    if (func === 'percent') {
        currentExpression = (eval(currentExpression) / 100).toString();
    } else if (func === 'pow') {
        currentExpression += '**';
    } else if (func === 'sqrt') {
        currentExpression = Math.sqrt(eval(currentExpression)).toString();
    } else if (func === 'sin') {
        currentExpression = Math.sin(eval(currentExpression)).toString();
    } else if (func === 'cos') {
        currentExpression = Math.cos(eval(currentExpression)).toString();
    } else if (func === 'tan') {
        currentExpression = Math.tan(eval(currentExpression)).toString();
    }
    updateDisplay();
}

 function addResult(result) {
    calculation.push(currentExpression);
    let calculation_lenght = calculation.length; 
    console.log(calculation_lenght);
    let calculation_history =  calculation[`${calculation_lenght}`];
    console.log(calculation_history); 

    const resultContainer = document.getElementById('resultContainer');
    const resultBox = document.createElement('div');
    resultBox.classList.add('result');
    resultBox.textContent = calculation_history + "           =             " +  result;
    console.log(resultBox.textContent); 
    resultContainer.appendChild(resultBox);
    document.getElementById('sidebar').style.display = 'block';
}
