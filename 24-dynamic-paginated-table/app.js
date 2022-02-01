document.addEventListener('alpine:init', () => {
  Alpine.store('data', {
    candidates: [],

    init() {
      // fetch api response
      this.candidates = data;
    },
  });

  Alpine.data('dynTable', () => ({}));
});
