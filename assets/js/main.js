const form = document.getElementById('form-calculadora');
form.addEventListener('submit',(evento) => {
    evento.preventDefault();
});

const display = document.querySelector('#display');
const operationList = ['*', '+', '/', '-', '=', '%'];

function calcular(num1, num2, operation){
    const stringCalculo = num1 + operation + num2;
    return eval(stringCalculo);
}

let numero1 = "";
let numero2 = "";
let lastOperation = null;

const buttonList = document.querySelectorAll('button');
for (var i = 0, len = buttonList.length; i < len; i++) {
    buttonList[i].addEventListener('click', (evento) => {
        const buttonValue = evento.target.value;

        if(operationList.includes(buttonValue)){
            if(buttonValue == '='){
                numero2 = display.value;
                
                const total = calcular(numero1, numero2, lastOperation);
                display.value = total;
            } else {
                lastOperation = buttonValue;
                numero1 = display.value;
                display.value = "";
            }
        } else {
            if(buttonValue != '.'){
                display.value += buttonValue;
            } else{
                if(display.value.indexOf('.') == -1){
                    display.value += buttonValue;
                }
            }
        }
    }, false);
}
