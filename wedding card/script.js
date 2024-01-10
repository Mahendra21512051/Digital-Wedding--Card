let currentNumber = 0;
function changeNumber() {
  currentNumber++;
  document.getElementById("number").innerText = currentNumber;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var changeColorButton = document.querySelector(".change-color-button");
  changeColorButton.style.backgroundColor = getRandomColor();
}
function clearInput() {
  var inputText = document.getElementById("inputText");
  var displayButton = document.querySelector(".show-button");
  displayButton.innerText = inputText.value;
  inputText.value = "";
}

function submitForm() {
  changeColor();
  changeNumber();
  clearInput();
}
