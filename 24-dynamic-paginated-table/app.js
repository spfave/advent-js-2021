document.addEventListener('alpine:init', () => {
  Alpine.store('data', {
    candidates: [],
  });

  Alpine.data('dynTable', () => ({
    pageLimit: 5,
    pageCandidates: [],

    init() {
      // fetch api response
      this.$store.data.candidates = data;
      this.pageCandidates = this.$store.data.candidates.slice(
        0,
        this.pageLimit
      );
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
