// Cash formatter to
const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

// Alpine JS
document.addEventListener('alpine:init', () => {
  // Store
  Alpine.store('menu', {
    items: [],
    cart: [],

    init() {
      this.items = menuItems;
    },

    displayDollar(value) {
      return dollarFormatter.format(value);
    },
  });
});
