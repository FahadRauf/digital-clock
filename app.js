function digitalClock() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let tareekh = date.getDate();
  let saal = date.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let currentDay = days[date.getDay()];

  let currentMonth = months[date.getMonth()];

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hours").innerHTML = hours + ":";
  document.getElementById("minutes").innerHTML = minutes + ":";
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("days").innerHTML = currentDay;
  document.getElementById("months").innerHTML = currentMonth;
  document.getElementById("din").innerHTML = tareekh + ",";
  document.getElementById("saal").innerHTML = saal;
}

setInterval(digitalClock, 1000);
