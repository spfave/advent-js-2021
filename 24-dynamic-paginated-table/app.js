document.addEventListener('alpine:init', () => {
  Alpine.data('dynTable', () => ({
    candidates: null,

    init() {
      // fetch api response
      this.candidates = data;
    },
  }));
});
