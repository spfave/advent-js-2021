const months = [];

document.addEventListener('alpine:init', () => {
  Alpine.data('calendar', () => ({
    date: new Date(),

    monthHeader() {
      const year = this.date.getFullYear();
      const month = this.date.toLocaleString('default', { month: 'long' });

      return `${year} - ${month}`;
    },
  }));
});
