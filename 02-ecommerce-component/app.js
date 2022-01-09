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
    cart: [
      {
        name: 'French Fries with Ketchup',
        price: 2.23,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 2,
      },
      {
        name: 'Salmon and Vegetables',
        price: 5.12,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 1,
      },
    ],

    init() {
      this.items = menuItems;
    },

    displayDollar(value) {
      return dollarFormatter.format(value);
    },
  });

  // Data
  Alpine.data('menu', () => ({}));

  Alpine.data('cart', () => ({
    get cartEmpty() {
      return this.$store.menu.cart.length === 0;
    },
  }));
});
