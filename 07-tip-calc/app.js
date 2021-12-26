// const calculateButton = document.getElementById('calculate');

// const totalPerPersonText = document.getElementById('total-per-person');
// const tipAmountText = document.getElementById('tip-amount');

// const billAmountInput = document.getElementById('bill-amount');
// const numberOfPeopleText = document.getElementById('number-of-people');

// calculateButton.addEventListener('click', () => {
//   const originalBillAmount = Number(billAmountInput.value);
//   const numberOfPeople = Number(numberOfPeopleText.value);

//   const selectedRadioTip = document.querySelector('input[name="tip"]:checked');
//   if (!selectedRadioTip) return;

//   const tipPercentage = Number(selectedRadioTip.value.slice(0, -1)) / 100;
//   const totalTip = Math.round(originalBillAmount * tipPercentage * 100) / 100;
//   const totalBill = totalTip + originalBillAmount;
//   const perPerson = Math.round((totalBill / numberOfPeople) * 100) / 100;

//   totalPerPersonText.innerText = formatPrice(perPerson);
//   tipAmountText.innerText = formatPrice(totalTip);
// });

const formatPrice = (price) => {
  return price.toFixed(2);
};

document.addEventListener('alpine:init', () => {
  Alpine.data('tipCalc', () => ({
    bill: 25,
    numberPeople: 1,
    tip: 0.2,

    get totalPerPerson() {
      const totalPerPerson = (this.bill * (1 + +this.tip)) / this.numberPeople;
      return formatPrice(totalPerPerson);
    },
    get tipTotal() {
      const tipTotal = this.bill * this.tip;
      return formatPrice(tipTotal);
    },

    // calculate() {},
  }));
});
