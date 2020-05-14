
var buttonEl = document.querySelector("#btn");

var changeColor = function (event) {
  document.getElementById("body").style.backgroundColor = "lightgreen";
};



buttonEl.addEventListener("click", changeColor);

console.log("hi, I am Aidan");