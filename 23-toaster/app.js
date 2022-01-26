document.addEventListener('alpine:init', () => {
  Alpine.data('toaster', () => ({
    hide: true,

    init() {
      setTimeout(() => {
        this.hide = false;
      }, 15000);
    },

    close() {
      this.hide = true;
    },
  }));
});
