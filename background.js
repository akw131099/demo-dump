const cyanSelector = document.getElementById("cyan-selector");

cyanSelector.addEventListener("click", handleClickCyan);

function handleClickCyan() {
  document.body.style.backgroundColor = "cyan";
}

const papayawhipSelector = document.getElementById("papayawhip-selector");

papayawhipSelector.addEventListener("click", handleClickPapaya);

function handleClickPapaya() {
  document.body.style.backgroundColor = "papayawhip";
}

const greySelector = document.getElementById("grey-selector");

greySelector.addEventListener("click", handleClickGrey);

function handleClickGrey() {
  document.body.style.backgroundColor = "grey";
}

const whiteSelector = document.getElementById("white-selector");

whiteSelector.addEventListener("click", handleClickWhite);

function handleClickWhite() {
  document.body.style.backgroundColor = "white";
}

const peruSelector = document.getElementById("peru-selector");

peruSelector.addEventListener("click", handleClickPeru);

function handleClickPeru() {
  document.body.style.backgroundColor = "peru";
}
