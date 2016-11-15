const RESET_TIME = 3000;
let timeout;
let lastPress = performance.now();
let average = 0;
let iterations = 1;

const tapBtn = document.querySelector('#tap');
const resetBtn = document.querySelector('#reset');

function tap() {
    const elapsedTime = performance.now() - lastPress;
    lastPress = performance.now();

    if (elapsedTime > RESET_TIME) {
        average = 0;
        iterations = 1;
    } else {
        average = (average * (iterations - 1) + elapsedTime) / iterations;
        iterations += 1;
        const bpm = Math.round(60000 / average);
        tapBtn.innerHTML = bpm.toString();
    }

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
        tapBtn.innerHTML = 'Tap';
    }, RESET_TIME);
}

tapBtn.addEventListener('click', tap);

document.addEventListener('keydown', tap);

resetBtn.addEventListener('click', () => {
    tapBtn.innerHTML = 'Tap';
    
    if (timeout) {
        clearTimeout(timeout);
    }

    average = 0;
    iterations = 1;
});

