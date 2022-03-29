
/**
 * Calculadora
 * ok 1. Digitar o primeiro número
 * ok 2. Receber a operação
 * ok 3. Armazenar o conteúdo do display em uma variável
 * ok 4. Apagar o texto do display
 * ok 5. Digitar o segundo número
 * ok 6. Calcular o resultado quando pressionar no botão =
 */


const form = document.getElementById('form-calculadora');
form.addEventListener('submit',(evento) => {
    evento.preventDefault();
});

const display = document.querySelector('#display');
const operationList = [
    'multiplicar',
    'somar',
    'dividir',
    'subtrair',
    'calcular',
    'percentual'
];

let numero1 = "";
let numero2 = "";

const buttonList = document.querySelectorAll('button');
for (var i = 0, len = buttonList.length; i < len; i++) {
    buttonList[i].addEventListener('click', (evento) => {
        const buttonValue = evento.target.value;

        if(operationList.includes(buttonValue)){
            console.log(buttonValue);
            if(buttonValue == 'calcular'){
                numero2 = display.value;
                const total = parseFloat(numero1) + parseFloat(numero2);
                display.value = total;
            } else {
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
