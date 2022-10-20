

function setTextElementValueById(elementById, newValue) {
    const textElement = document.getElementById(elementById);
    textElement.innerText = newValue;
}


document.getElementById('button-deposit').addEventListener('click', function () {

    const previousDepositAmount = getElementValueById('deposit-total')
    const newDepositAmount = getInputFiledValueById('deposit-input');
    const newDepositAmountUpdate = previousDepositAmount + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositAmountUpdate);

    const previousTotalBalance = getElementValueById('balance-total');
    const totalBalance = previousTotalBalance + newDepositAmountUpdate;


    setTextElementValueById('balance-total', totalBalance);
})