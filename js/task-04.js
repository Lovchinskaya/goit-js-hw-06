
const button = {
    increase: document.querySelector('[data-action=increment]'),
    decrease: document.querySelector('[data-action=decrement]'),
};
const {increase, decrease} = button;
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};
increase.addEventListener('click', increment);
decrease.addEventListener('click', decrement);