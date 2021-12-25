document.addEventListener('alpine:init', () => {
  Alpine.data('starRating', () => ({
    starList: [],

    init() {
      this.$nextTick(() => {
        this.starList = [...document.querySelectorAll('.star')];
      });
    },

    setRating(el) {
      const lastStar = el.dataset.starId;

      this.starList.slice(0, lastStar).forEach((star) => {
        star.classList.remove('star');
        star.classList.add('star-fill');
      });
      this.starList.slice(lastStar).forEach((star) => {
        star.classList.remove('star-fill');
        star.classList.add('star');
      });
    },
  }));
});
