
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* 
  1.Get the element by id
  2.Get the value of the element
  3.Convert the value to a number
  */

    // Get deposit input amount by id
    const depositInput = getInputValueById("deposit-input");
    // console.log(depositInput);

    // Get previous deposit amount by id
    const previousDeposiTotal = getElementValueById("deposit-total");
    // console.log(previousDeposiTotal);

    // Get new deposit total
    const newDepositTotal = previousDeposiTotal + depositInput;

    // Update deposit total
    updateTotalField("deposit-total", newDepositTotal);

    // Update account balance
    const previousBalance = getElementValueById("balance-total");
    const newBalanceTotal = previousBalance + depositInput;
    updateTotalField("balance-total", newBalanceTotal);

  });
