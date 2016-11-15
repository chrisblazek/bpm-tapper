const RESET_TIME = 3000;
let timeout;
let lastPress = performance.now();
let average = 0;
let iterations = 1;

const tapBtn = document.querySelector('#tap');
const bpmDisplay = document.querySelector('#bpm');

tapBtn.addEventListener('click', () => {
    const elapsedTime = performance.now() - lastPress;
    lastPress = performance.now();

    if (elapsedTime > RESET_TIME) {
        average = 0;
        iterations = 1;
    } else {
        average = (average * (iterations - 1) + elapsedTime) / iterations;
        iterations += 1;
        const bpm = Math.round(60000 / average);
        bpmDisplay.innerHTML = bpm.toString();
    }

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
        bpmDisplay.innerHTML = '0';
    }, RESET_TIME);
});
