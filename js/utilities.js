
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

function validateDepositAmount(depositAmount) {
  if (depositAmount <= 0 || isNaN(depositAmount)) {
    alert("Invalid deposit amount. Please enter a valid amount.");
    return false;
  }
  return true;
}

function validateWithdrawAmount(withdrawAmount, currentBalance) {
  if (
    withdrawAmount <= 0 ||
    isNaN(withdrawAmount) ||
    withdrawAmount > currentBalance
  ) {
    alert(
      "Invalid withdraw amount. Please enter a valid amount and make sure you have sufficient balance which should be more than 1000."
    );
    return false;
  }
  return true;
}






