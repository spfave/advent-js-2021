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
    expenses: [
      { payee: 'Starbucks', value: '5.54' },
      { payee: 'Jamba Juice', value: '7.49' },
    ],

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
