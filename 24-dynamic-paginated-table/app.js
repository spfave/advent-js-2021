document.addEventListener('alpine:init', () => {
  Alpine.store('data', {
    candidates: [],
  });

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

    sortColumn() {},
  }));

  Alpine.data('dynTableRow', () => ({
    editMode: false,

    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  }));
});
