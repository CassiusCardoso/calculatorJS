// // Pegar o display que aparece os valores 
// const display = document.querySelector('#display')

// // Pegar os botões com números
// const btn = document.querySelector('.number')

// // Pegar o sinal de igual, que ao ser clicado vai resultar o valor 
// const calculate = document.querySelector('.calculate')

// // Pegar os botões com operações (*, +, -, divisão) exceto o de igual
// const btnOperator = document.querySelector('.operator-btn')

// // Evento no botão de números
// btn.addEventListener('click', appendDisplay(input))

// function appendDisplay(input){
//     display.value += input;
// }

// btnOperator.addEventListener('click', clearDisplay)
// function clearDisplay(){
//     display.value = '';
// }



// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = 'Error';
//     }

// }

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


