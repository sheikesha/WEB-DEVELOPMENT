let resultDisplay = document.getElementById("result");

function append(value) {
  if (resultDisplay.innerText === "0") {
    resultDisplay.innerText = value;
  } else {
    resultDisplay.innerText += value;
  }
}

function clearResult() {
  resultDisplay.innerText = "0";
}
function deleteLast() {
  if (resultDisplay.innerText.length > 1) {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
  } else {
    resultDisplay.innerText = "0";
  }
}

function calculate() {
  try {
    resultDisplay.innerText = eval(resultDisplay.innerText.replace("×", "*").replace("÷", "/"));
  } catch {
    resultDisplay.innerText = "Error";
  }
}