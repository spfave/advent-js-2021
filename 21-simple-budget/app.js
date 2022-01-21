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
    payee: '',
    value: null,
    expenses: [
      { payee: 'Starbucks', value: 5.54 },
      { payee: 'Jamba Juice', value: 7.49 },
    ],

    init() {
      this.$watch('expenses', () => {
        this.calcSpent();
      });
      this.calcSpent();
    },

    setBudget(el) {
      this.income = +el.value;
      el.value = '';
    },

    addExpense() {
      const expense = { payee: this.payee, value: +this.value };
      this.expenses.push(expense);
      this.payee = '';
      this.value = null;
    },

    removeExpense(id) {
      this.expenses.splice(id, 1);
    },

    calcSpent() {
      this.spent = this.expenses.reduce((acc, { value }) => acc + value, 0);
    },

    calcBalance() {},

    displayDollar(value) {
      return dollarFormatter.format(value);
    },
  }));
});
