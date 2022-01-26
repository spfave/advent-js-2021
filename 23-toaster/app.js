document.addEventListener('alpine:init', () => {
  Alpine.data('toaster', () => ({
    hide: true,
  }));
});
