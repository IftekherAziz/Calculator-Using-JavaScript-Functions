function getInputValueById(inputId) {
  // Get the element by id
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input field
  inputField.value = "";
  // Return the value
  return amountValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseFloat(elementText);

  // Return the value
  return elementValue;
}

function updateTotalField(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
