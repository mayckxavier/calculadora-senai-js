const form = document.getElementById('form-calculadora');
form.addEventListener('submit',(evento) => {
    evento.preventDefault();
});


const display = document.querySelector('#display');

const buttonList = document.querySelectorAll('button');
for (var i = 0, len = buttonList.length; i < len; i++) {
    buttonList[i].addEventListener('click', (evento) => {
        const buttonValue = evento.target.value;

        if(buttonValue != '.'){
            display.value += buttonValue;
        } else{
            if(display.value.indexOf('.') == -1){
                display.value += buttonValue;
            }
        }
    }, false);
}
