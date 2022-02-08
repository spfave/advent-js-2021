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

  return array.sort(sortFunc);
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

    sortColumnNum() {
      console.log(`sortNum`);
      console.log(`this.pageCandidates 1: `, this.pageCandidates);
      this.pageCandidates = sortNumeric(this.pageCandidates, 'id', 'dsc');
      console.log(`this.pageCandidates 2: `, this.pageCandidates);
    },

    // ascending and descending
    sortColumnAlp(param) {
      console.log(`sortNum`);
      console.log(`this.pageCandidates 1: `, this.pageCandidates);
      sortAlphabetical(this.pageCandidates, param, 'dsc');
      console.log(`this.pageCandidates 2: `, this.pageCandidates);
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
