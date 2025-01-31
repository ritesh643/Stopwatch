let hours = 0;
let minutes = 0;
let seconds = 0;
let laps = [];
let intervalId;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', addLap);

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateStopwatch, 1000);
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}


function resetStopwatch() {
    clearInterval(intervalId);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    laps = [];
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
  }
  
  function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    display.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }
  
  function addLap() {
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    laps.push(lapTime);
    const lapListItem = document.createElement('LI');
    lapListItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapsList.appendChild(lapListItem);
  }

  
function padZero(time) {
    return time.toString().padStart(2, '0');
  }
  