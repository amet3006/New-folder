let timerInterval;
let timerCount = 0;

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
  timerInterval = setInterval(() => {
    timerCount++;
    console.log(timerCount);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerCount = 0;
  console.log("Timer stopped.");
}

function delayedCount(delay, countTo) {
  setTimeout(function() {
    let count = 0;
    let intervalId = setInterval(function() {
      console.log(count);
      count++;
      if (count > countTo) {
        clearInterval(intervalId);
      }
    }, 1000);
  }, delay * 1000);
}

// delayedCount(5, 10); // Wait 5 seconds, then count to 10

//https://www.youtube.com/watch?v=_7rT-ixivWU- ova e linkot sto bese vo 3tiot del od domasnata
const url=new URL("https://www.youtube.com/watch?v=_7rT-ixivWU");
console.log("Protocol: " + url.protocol); //"https:"
console.log("Host " + url.host); //"www.youtube.com"
console.log("Pathname " + url.pathname); //"/watch"
console.log("Search " + url.search); //"?v=_7rT-ixivWU"