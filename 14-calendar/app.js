const months = [];

document.addEventListener('alpine:init', () => {
  Alpine.data('calendar', () => ({
    today: new Date(),
    date: new Date(),

    monthHeader() {
      const year = this.date.getFullYear();
      const month = this.date.toLocaleString('default', { month: 'long' });

      return `${year} - ${month}`;
    },

    changeMonth(direction) {
      const newMonth = new Date(
        this.date.setMonth(this.date.getMonth() + direction, 1)
      );

      this.date =
        newMonth.getFullYear() === this.today.getFullYear() &&
        newMonth.getMonth() === this.today.getMonth()
          ? new Date(this.today)
          : newMonth;
    },

    /** Return number of days in month. Use 1 for January, 2 for February, etc. */
    // daysInMonth(month, year) {
    //   return new Date(year, month, 0).getDate();
    // },
  }));
});
