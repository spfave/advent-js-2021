document.addEventListener('alpine:init', () => {
  // Global stores
  Alpine.store('episodes', episodes);

  // Global data
  Alpine.data('episodes', () => ({
    episodeId(id) {
      return `episode-${id}`;
    },
    episodeTitle(id, title) {
      return `${id} || ${title}`;
    },
  }));
});
