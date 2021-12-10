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
    start: 0,
    end: 0,
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
      console.log(`single: ${id}`);
      console.log(this.episodeList);
    },

    handleShiftClick(id) {
      if (this.start === 0) {
        this.start = id;
        // console.log(`shifted start: ${this.start}`);
        return;
      }

      this.end = id;
      // console.log(`shifted end: ${this.end}`);
      if (this.start > this.end) {
        [this.start, this.end] = [this.end - 1, this.start];
      }

      // console.log(this.episodeList);
      this.episodeList.slice(this.start, this.end).forEach((ep) => {
        ep.checked = true;
      });

      this.start = 0;
      this.end = 0;
    },
  }));
});
