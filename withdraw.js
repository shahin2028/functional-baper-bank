
document.getElementById('button-withdraw').addEventListener('click', function () {

    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const withdrawAmountInputField = getInputFiledValueById('withdraw-input');
    const totalWithdraw = previousWithdrawAmount + withdrawAmountInputField;

    setTextElementValueById('withdraw-total', totalWithdraw);

    const previousTotalBalanceElement = getElementValueById('balance-total');
    const afterWithdrawBalance = previousTotalBalanceElement - totalWithdraw;
    setTextElementValueById('balance-total', afterWithdrawBalance);


})