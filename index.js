const display = document.querySelector('#display');

// Pegar todos os botões com números e operadores
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator-btn');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.operator-btn:last-child'); // Botão "C" para limpar

// Adicionar evento de clique para botões de números
numberButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        appendDisplay(event.target.textContent);
        console.log('Número clicado:', event.target.textContent);
    });
});

// Adicionar evento de clique para botões de operadores
operatorButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const operator = event.target.textContent;
        if (operator === 'C') {
            clearDisplay();
        } else {
            appendDisplay(operator);
        }
        console.log('Operador clicado:', operator);
    });
});

// Função para adicionar valor ao display
function appendDisplay(input) {
    display.value += input;
}

// Função para limpar o display
function clearDisplay() {
    display.value = '';
}

// Adicionar evento de clique para o botão de calcular
calculateButton.addEventListener('click', function() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});


