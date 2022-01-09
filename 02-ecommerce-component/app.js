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
  Alpine.data('menu', () => ({
    addToCart() {},
  }));

  Alpine.data('cart', () => ({
    cartPrice: { subTotal: 0, tax: 0, total: 0 },
    get cartEmpty() {
      return this.$store.menu.cart.length === 0;
    },

    init() {
      this.cartTotal();
    },

    increaseItem() {},
    decreaseItem() {},

    itemTotal(item) {
      const itemTotal = item.price * item.count;
      return dollarFormatter.format(itemTotal);
    },

    cartTotal() {
      const restaurantTax = 0.05; // 5.0% avg VA

      const subTotal = this.$store.menu.cart.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
      const tax = subTotal * restaurantTax;
      const total = subTotal + tax;

      this.cartPrice = { subTotal, tax, total };
    },
  }));
});
