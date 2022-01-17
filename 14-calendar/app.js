const months = [];

document.addEventListener('alpine:init', () => {
  Alpine.data('calendar', () => ({
    today: new Date(),
    date: new Date(),
    monthDates: null,

    init() {
      this.$watch('monthDates', () => {
        this.indicateToday();
      });
      this.monthDays();
    },

    monthHeader() {
      const year = this.date.getFullYear();
      const month = this.date.toLocaleString('default', { month: 'long' });

      return `${year} - ${month}`;
    },

    monthDays() {
      const year = this.date.getFullYear();
      const month = this.date.getMonth();

      // determine starting day of month
      const startDay = new Date(year, month, 1).getDay();

      // create array of leading null dates as needed
      const leadingDates = [...Array(startDay).fill(null)];

      // create array of month dates
      const numMonthDays = this.daysInMonth(month + 1, year);
      const dates = [...Array(numMonthDays).keys()].map((day) => day + 1);

      this.monthDates = leadingDates.concat(dates);
    },

    indicateToday() {
      document.querySelector('.today')?.classList.remove('today');

      if (this.isToday()) {
        document
          .querySelector(`[data-day="${this.today.getDate()}"]`)
          .classList.add('today');
      }
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

      this.monthDays();
    },

    /** Return number of days in month. Use 1 for January, 2 for February, etc. */
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },

    isToday() {
      return this.date.valueOf() === this.today.valueOf();
    },
  }));
});
