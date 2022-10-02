let counterValue = 0;
const startCounter = document.querySelector('#value');
const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');

buttonDecr.addEventListener('click', () => {
    counterValue -= 1;
    startCounter.textContent = counterValue;
});

buttonIncr.addEventListener('click', () => {
    counterValue += 1;
    startCounter.textContent = counterValue;
});


