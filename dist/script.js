const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
const month = new Date().getMonth();

// initial time difference (13 days, 58 minutes, 0 seconds in milliseconds)
let initialDiff = (13 * 24 * 60 * 60 * 1000) + (58 * 60 * 1000);

// initial target time
const initialTarget = new Date().getTime() + initialDiff;

// countdown
let timer = setInterval(function() {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

  // adjust diff with initialDiff
  diff += initialDiff;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
    </div>";

  // stop timer when the target date is reached
  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }

}, 1000);
