/* eslint-disable */
import "./style.css";

let counter = 0;

let interval = setInterval(() => {
  if (counter == 10) {
    changeCard();
    counter = 0;
  } else {
    counter++;
  }
  document.getElementById("demo").innerHTML = counter;
}, 1000);

function changeCard() {
  function random_item(figura) {
    return figura[Math.floor(Math.random() * figura.length)];
  }

  let figures = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let figTop = document.getElementById("topFig");
  let figBottom = document.getElementById("bottomFig");
  let figNumber = document.getElementById("numberFig");

  let actual = random_item(figures);
  let num = random_item(number);

  if (actual === "&hearts;" || actual === "&diams;") {
    figBottom.style.color = "red";
    figTop.style.color = "red";
    figNumber.style.color = "red";
  } else {
    figBottom.style.color = "black";
    figTop.style.color = "black";
    figNumber.style.color = "black";
  }

  figBottom.innerHTML = actual;
  figTop.innerHTML = actual;
  figNumber.innerHTML = num;
}

window.onload = () => {
  changeCard();
};

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
  changeCard();
  clearInterval(interval);
  interval = setInterval(() => {
    if (counter == 10) {
      changeCard();
      counter = 0;
    } else {
      counter++;
    }
    document.getElementById("demo").innerHTML = counter;
  }, 1000);
});

let input = document.querySelectorAll("input");

input.forEach(element => {
  if (element.className == "casillaW") {
    element.addEventListener("input", updateValue);
  } else if (element.className == "casillaH") {
    element.addEventListener("input", updateHeightValue);
  }
});

function updateValue(e) {
  let widthC = document.getElementById("carta");
  console.log(e.target.value);
  let size = e.target.value + "px";
  widthC.style.width = size;
}

function updateHeightValue(e) {
  let heightC = document.getElementById("carta");
  console.log(e.target.value);
  let size = e.target.value + "px";
  heightC.style.height = size;
}
