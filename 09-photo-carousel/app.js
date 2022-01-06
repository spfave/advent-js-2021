document.addEventListener('alpine:init', () => {
  Alpine.store('images', { content: images });

  Alpine.data('photoCarousel', () => ({
    imageId: 0,

    setImage(el) {},

    imageName(imageId) {
      return this.$store.images.content[imageId].image;
    },
    imageTxt(imageId) {
      return this.$store.images.content[imageId].caption;
    },

    imagePath(imageId) {
      const imageName = this.imageName(imageId);
      return `./images/${imageName}`;
    },
  }));
});
