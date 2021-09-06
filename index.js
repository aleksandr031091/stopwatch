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

const obj = {
  currentSecs: 57,
  currentMins: 59,
  currentHours: 0,
  interval: null,
};

function setCountUpTimer() {
  refs.toggleWotch.setAttribute("is_stop", "stop");
  changeTextBtn("Stop");

  obj.interval = setInterval(() => {
    obj.currentSecs++;
    refs.secs.innerHTML = obj.currentSecs;
    refs.mins.textContent = obj.currentMins;
    refs.hours.textContent = obj.currentHours;

    if (obj.currentSecs === 60) {
      obj.currentSecs = 0;
      obj.currentMins++;
    }

    if (obj.currentMins === 60) {
      obj.currentSecs = 0;
      obj.currentMins = 0;
      obj.currentHours++;
    }
  }, 1000);
}

function startTime(e) {
  setCountUpTimer();
}

// function r() {
//   const s = document.body.querySelector("button[is_stop='stop']");
//   // .addEventListener("click", fn);
//   s.addEventListener("click", reset());
//   console.log(s);
// }

function pause() {
  clearInterval(obj.interval);
  changeTextBtn("Start");
}

function reset() {
  obj.currentSecs = 0;
  obj.currentMins = 0;
  obj.currentHours = 0;
  refs.secs.textContent = "0";
  refs.mins.textContent = "0";
  refs.hours.textContent = "0";

  clearInterval(obj.interval);
}

function changeTextBtn(text) {
  refs.toggleWotch.textContent = text;
}

// const refs = {
//   toggleWotch: document.querySelector("#toggleWotch"),
//   pauseBtn: document.querySelector("#pauseBtn"),
//   resetBtn: document.querySelector("#resetBtn"),

//   time: document.querySelector('[data-value="time"]'),
// };

// refs.toggleWotch.addEventListener("click", startTimer);
// refs.resetBtn.addEventListener("click", reset);
// refs.pauseBtn.addEventListener("click", pause);

// let interval;

// const padStrStart = (num) => String(num).padStart(2, 0);

// const getUnits = (ms) => {
//   const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((ms % (1000 * 60)) / 1000);
//   return { hours, minutes, seconds };
// };

// const renderTime = (time) => {
//   let { hours, minutes, seconds } = time;
//   hours = padStrStart(hours);
//   minutes = padStrStart(minutes);
//   seconds = padStrStart(seconds);
//   refs.time.textContent = `${hours} hours / ${minutes} minutes / ${seconds} seconds`;
// };

// const getTime = (startTime) => {
//   const now = new Date();
//   const diff = now - startTime;
//   const timeObj = getUnits(diff);
//   renderTime(timeObj);
// };

// function startTimer() {
//   refs.toggleWotch.removeAttribute("is_stop", "Stop");
//   changeTextBtn("Start");

//   const startTime = new Date();
//   getTime(startTime);

//   interval = setInterval(() => {
//     getTime(startTime);

//     changeTextBtn("Stop");
//   }, 1000);
// }

// function pause() {
//   refs.toggleWotch.setAttribute("is_stop", "Stop");
//   changeTextBtn("Start");
//   clearInterval(interval);
// }

// function reset() {
//   refs.time.textContent = "00 hours / 00 minutes / 00 seconds";
//   changeTextBtn("Start");
//   clearInterval(interval);
// }

// function changeTextBtn(text) {
//   refs.toggleWotch.textContent = text;
// }
