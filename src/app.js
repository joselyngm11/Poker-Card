/* eslint-disable */
import "./style.css";

function changeCard() {
  function random_item(figura) {
    let random = figura[Math.floor(Math.random() * figura.length)];

    return random;
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
  //let num = Math.floor(Math.random() * 9 + 2);

  let actual = random_item(figures);
  let num = random_item(number);

  if (actual === "&hearts;" || actual === "&diams;") {
    figBottom.style.color = "red";
    figTop.style.color = "red";
    figNumber.style.color = "red";
  }

  figBottom.innerHTML = actual;
  figTop.innerHTML = actual;
  figNumber.innerHTML = num;
}

window.onload = () => {
  //document.querySelector(".card").classList.add("heart");
  //setTimeout(() => {
  //document.querySelector(".card").classList.remove("heart");
  //document.querySelector(".card").classList.add("spade");
  //}, 2000); // 2 segundos

  let change = changeCard();
};

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
  let change = changeCard();
});

let width = document.getElementById("addWidth");
let height = document.getElementById("addHeight");

width.addEventListener("keydown", e => {
  if (e.target.value.trim().length != 0 && e.key === "Enter") {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<span><i class="fa fa-trash"></i></span> ${e.target.value}`;
    newLi.addEventListener("click", e => {
      newLi.parentNode.removeChild(newLi);
    });
    ul.appendChild(newLi);
    e.target.value = " ";
  }
});
