document.addEventListener('alpine:init', () => {
  Alpine.data('videoGallery', () => ({
    mainVideo: null,
    relatedVideos: null,

    init() {
      // fetch api response
      this.mainVideo = sampleAPIResponse.items[0];
      this.relatedVideos = sampleAPIResponse.items.slice(1);
    },
  }));
});
