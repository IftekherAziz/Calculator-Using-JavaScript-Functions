document.getElementById("withdraw-button").addEventListener("click", function () {
   
    // Get withdraw input amount by id
    const withdrawInput = getInputValueById("withdraw-input");

    // Get previous withdraw amount by id
    const previousWithdrawTotal = getElementValueById("withdraw-total");
    
    // Get new withdraw total
    const newWithdrawTotal = previousWithdrawTotal + withdrawInput;

    // Update withdraw total
    updateTotalField("withdraw-total", newWithdrawTotal);

    // Update balance
    const currentBalance = getElementValueById("balance-total");
    const newBalance = currentBalance - withdrawInput;
    updateTotalField("balance-total", newBalance);

  });
