// Alpine JS
document.addEventListener('alpine:init', () => {
  // Global data store
  Alpine.store('data', {
    candidates: [],
  });

  // Dynamic table
  Alpine.data('dynTable', () => ({
    pageLimit: 5,
    page: 1,
    pageCandidates: [],

    init() {
      // fetch api response
      this.$store.data.candidates = data;
      this.pageCandidates = this.$store.data.candidates.slice(
        0,
        this.pageLimit
      );
    },

    get numPages() {
      return Math.ceil(this.$store.data.candidates.length / this.pageLimit);
    },

    // ascending and descending
    sortColumn(column, order) {
      console.log(`sort`);

      // this.pageCandidates.sort();
    },

    nextData() {},

    prevData() {},

    setPage() {},
  }));

  // Dynamic table row
  Alpine.data('dynTableRow', () => ({
    editMode: false,

    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  }));
});
