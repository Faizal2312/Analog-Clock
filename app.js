setInterval(setClock, 1000);
const secHand = document.querySelector("[data-second-hand]");
const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-minute-hand]");

function setClock() {
  const date = new Date();
  const sec = date.getSeconds() / 60;
  const min = (sec + date.getMinutes()) / 60;
  const hour = (min + date.getHours()) / 12;

  setRotation(secHand, sec);
  setRotation(minHand, min);
  setRotation(hourHand, hour);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
