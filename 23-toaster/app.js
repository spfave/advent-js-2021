document.addEventListener('alpine:init', () => {
  Alpine.data('toaster', () => ({
    hide: true,

    init() {
      setTimeout(() => {
        this.hide = false;
      }, 15000);

      document.addEventListener('mouseleave', (event) => {
        if (event.clientY < 60) {
          this.hide = false;
        }
      });
    },

    close() {
      this.hide = true;
    },
  }));
});
