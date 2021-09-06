const refs = {
  toggleWotch: document.querySelector("#toggleWotch"),
  pauseBtn: document.querySelector("#pauseBtn"),
  resetBtn: document.querySelector("#resetBtn"),

  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

refs.toggleWotch.addEventListener("click", startTime);
refs.resetBtn.addEventListener("click", reset);
refs.pauseBtn.addEventListener("click", pause);

let currentSecs = 0;
let currentMins = 0;
let currentHours = 0;
let interval;

function setCountUpTimer() {
  interval = setInterval(() => {
    currentSecs++;
    refs.secs.textContent = currentSecs;

    if (currentSecs === 60) {
      currentSecs = 0;
      currentMins++;
      refs.mins.textContent = currentMins;
    }

    if (currentMins === 60) {
      currentSecs = 0;
      currentMins = 0;
      currentHours++;
      refs.hours.textContent = currentHours;
    }
  }, 1000);
}

function startTime(e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target) {
    setCountUpTimer();
  }
}

// function start(currentSecs) {
//     if (currentSecs === 60) {
//       currentMins++;
//       refs.mins.textContent = currentMins;
//     }
// }

function pause(e) {
  if (e.target) {
    clearInterval(interval);
  }
}

function reset(e) {
  if (e.target) {
    currentSecs = 0;
    currentMins = 0;
    currentHours = 0;
    refs.secs.textContent = "00";
    refs.mins.textContent = "00";
    refs.hours.textContent = "00";

    clearInterval(interval);
  }
}
