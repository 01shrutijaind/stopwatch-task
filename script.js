let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
});

function startStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

