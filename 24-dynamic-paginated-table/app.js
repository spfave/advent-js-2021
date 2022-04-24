// Functions
function sortAlphabetical(array, param, order = 'ascending') {
  let sortFunc;
  switch (order) {
    case 'descending':
      sortFunc = (a, b) => b[param].localeCompare(a[param], 'en-US');
      break;

    case 'ascending':
    default:
      sortFunc = (a, b) => a[param].localeCompare(b[param], 'en-US');
      break;
  }

  array.sort(sortFunc);
}

function sortNumeric(array, param, order = 'ascending') {
  let sortFunc;
  switch (order) {
    case 'descending':
      sortFunc = (a, b) => b[param] - a[param];
      break;

    case 'ascending':
    default:
      sortFunc = (a, b) => a[param] - b[param];
      break;
  }

  array.sort(sortFunc);
}

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
    sortColumn: 'id',
    sortDirection: 'ascending',

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

    sortColumnNum(param) {
      this.indicateSort(param);
      sortNumeric(this.pageCandidates, param, this.sortDirection);
    },

    // ascending and descending
    sortColumnAlp(param) {
      this.indicateSort(param);
      sortAlphabetical(this.pageCandidates, param, this.sortDirection);
    },

    indicateSort(param) {
      // Sort new column
      if (param !== this.sortColumn) {
        this.sortColumn = param;
        this.sortDirection = 'ascending';
        return;
      }

      // reverse current sorted row
      this.sortDirection =
        this.sortDirection === 'ascending' ? 'descending' : 'ascending';
    },

    handlePageChange(direction) {
      direction === 'ascending' ? this.page++ : this.page--;
      const offset = (this.page - 1) * this.pageLimit;
      this.pageCandidates = this.$store.data.candidates.slice(
        offset,
        offset + this.pageLimit
      );
    },

    handleSetPage() {
      if (!this.page) this.page = 1;
      const offset = (this.page - 1) * this.pageLimit;
      this.pageCandidates = this.$store.data.candidates.slice(
        offset,
        offset + this.pageLimit
      );
    },
  }));

  // Dynamic table row
  Alpine.data('dynTableRow', () => ({
    editMode: false,

    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  }));
});
