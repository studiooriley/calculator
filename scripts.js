let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let btnAdd = document.querySelector('#add-button');
let btnSubtract = document.querySelector('#subtract-button');
let btnMultiply = document.querySelector('#multiply-button');
let btnDivide = document.querySelector('#divide-button');
let btnPercent = document.querySelector('#percent-button');
let result = document.querySelector('#result');

btnAdd.addEventListener('click', () => {
    let total = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerText = total.toFixed(2);
})

btnAdd.addEventListener('touchstart', process_touchstart, false, () => {
    let total = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerText = total.toFixed(2);
});

btnSubtract.addEventListener('click', () => {
    let total = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerText = total.toFixed(2);
})

btnSubtract.addEventListener('touchstart', process_touchstart, false, () => {
    let total = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerText = total.toFixed(2);
});

btnMultiply.addEventListener('click', () => {
    let total = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerText = total.toFixed(2);
})

btnMultiply.addEventListener('touchstart', process_touchstart, false, () => {
    let total = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerText = total.toFixed(2);
});

btnDivide.addEventListener('click', () => {
    let total = parseFloat(num1.value) / parseFloat(num2.value);
    result.innerText = total.toFixed(2);
})

btnDivide.addEventListener('touchstart', process_touchstart, false, () => {
    let total = parseFloat(num1.value) / parseFloat(num2.value);
    result.innerText = total.toFixed(2);
});

btnPercent.addEventListener('click', () => {
    let total = (parseFloat(num1.value) / parseFloat(num2.value)) * 100;
    result.innerText = total.toFixed(2);
})

btnPercent.addEventListener('touchstart', process_touchstart, false, () => {
    let total = (parseFloat(num1.value) / parseFloat(num2.value)) * 100;
    result.innerText = total.toFixed(2);
});