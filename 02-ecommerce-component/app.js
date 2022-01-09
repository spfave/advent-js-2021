document.addEventListener('alpine:init', () => {
  Alpine.store('menu', {
    items: [],
    cart: [],

    init() {
      this.items = menuItems;
    },
  });
});
