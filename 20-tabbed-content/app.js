document.addEventListener('alpine:init', () => {
  Alpine.data('tabbed', () => ({
    episodes: [],
    selected: {},

    init() {
      // mock fetch api response and set in initialization
      this.episodes = episodes;
    },
  }));
});
