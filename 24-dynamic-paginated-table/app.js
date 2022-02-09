// Functions
function sortAlphabetical(array, param, order = 'asc') {
  let sortFunc;
  switch (order) {
    case 'dsc':
      sortFunc = (a, b) => b[param].localeCompare(a[param], 'en-US');
      break;

    case 'asc':
    default:
      sortFunc = (a, b) => a[param].localeCompare(b[param], 'en-US');
      break;
  }

  array.sort(sortFunc);
}

function sortNumeric(array, param, order = 'asc') {
  let sortFunc;
  switch (order) {
    case 'dsc':
      sortFunc = (a, b) => b[param] - a[param];
      break;

    case 'asc':
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
      sortNumeric(this.pageCandidates, param, 'dsc');
    },

    // ascending and descending
    sortColumnAlp(param) {
      sortAlphabetical(this.pageCandidates, param, 'dsc');
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
