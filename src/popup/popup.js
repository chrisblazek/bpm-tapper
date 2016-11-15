const RESET_TIME = 3000;
let timeout;
let lastPress = 0;
let average = 0;
let iterations = 0;

const tapBtn = document.querySelector('#tap');
const resetBtn = document.querySelector('#reset');

function tap() {
    const elapsedTime = performance.now() - lastPress;
    lastPress = performance.now();

    if (elapsedTime > RESET_TIME || iterations === 0) {
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

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    tap();
});

resetBtn.addEventListener('click', () => {
    tapBtn.innerHTML = 'Tap';
    average = 0;
    iterations = 0;
    lastPress = 0;
    if (timeout) {
        clearTimeout(timeout);
    }
});

