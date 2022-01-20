// Cash formatter
const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Alpine JS
document.addEventListener('alpine:init', () => {
  Alpine.data('budget', () => ({
    income: 0,
    spent: 0,
    balance: 0,
    expenses: [],

    init() {},

    setBudget() {},

    addExpense() {},

    removeExpense() {},

    calcSpent() {},

    calcBalance() {},

    displayDollar(value) {
      return dollarFormatter.format(value);
    },
  }));
});
