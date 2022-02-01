document.addEventListener('alpine:init', () => {
  Alpine.store('data', {
    candidates: [],
  });

  Alpine.data('dynTable', () => ({
    init() {
      // fetch api response
      this.$store.data.candidates = data;
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
