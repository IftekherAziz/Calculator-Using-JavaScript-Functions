document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // Get withdraw input amount by id
    const withdrawInput = getInputValueById("withdraw-input");

    // Get current balance
    const currentBalance = getElementValueById("balance-total");

    // Validate withdraw amount
    if (!validateWithdrawAmount(withdrawInput, currentBalance)) {
      return;
    }

    // Get previous withdraw amount by id
    const previousWithdrawTotal = getElementValueById("withdraw-total");
    if(currentBalance - withdrawInput <=1000 ){
      alert("You cannot withdraw this fixed amount.Please deposit first then come back to us for withdraw amount later. Thank you!");
      return;
    }
    // Get new withdraw total
    const newWithdrawTotal = previousWithdrawTotal + withdrawInput;

    // Update withdraw total
    updateTotalField("withdraw-total", newWithdrawTotal);

    // Update balance
    const newBalance = currentBalance - withdrawInput;
    if (newBalance < 1000) {
      alert("You cannot withdraw this fixed amount.Please deposit first then come back to us for withdraw amount later. Thank you!");
      return;
    }
    updateTotalField("balance-total", newBalance);
  });
