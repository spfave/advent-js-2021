window.addEventListener('mousedown', (event) => {
  if (event.shiftKey) {
    document.body.classList.add('no-highlight');
  }
});
window.addEventListener('mouseup', () => {
  document.body.classList.remove('no-highlight');
});

document.addEventListener('alpine:init', () => {
  // Global stores
  Alpine.store('episodes', episodes);

  // Global data
  Alpine.data('episodes', () => ({
    start: null,
    end: null,
    episodeList: [],

    init() {
      this.$nextTick(() => {
        this.episodeList = [
          ...document.querySelectorAll('input[type="checkbox"]'),
        ];
      });
    },

    episodeId(id) {
      return `episode-${id}`;
    },

    episodeTitle(id, title) {
      return `${id} || ${title}`;
    },

    handleClick(event, el) {
      if (event.shiftKey) {
        this.handleShiftClick(el.dataset.epId);
      } else {
        this.handleSingleClick(el.dataset.epId);
      }
    },

    handleSingleClick(id) {
      // console.log(`single: ${id}`);
    },

    handleShiftClick(id) {
      if (this.start === null) {
        this.start = id - 1;
        return;
      }

      this.end = id - 1;
      if (this.start > this.end) {
        [this.start, this.end] = [this.end, this.start];
      }

      // toggle only in-between checkboxes, start and end are handled directly
      const checkValue = this.episodeList[this.start].checked;
      this.episodeList.slice(this.start + 1, this.end + 1).forEach((ep) => {
        ep.checked = checkValue;
      });

      this.start = null;
      this.end = null;
    },
  }));
});
