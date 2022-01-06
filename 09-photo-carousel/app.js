document.addEventListener('alpine:init', () => {
  Alpine.data('photoCarousel', () => ({
    images: images,
    imageId: 0,

    setImage(el) {},

    imageName(imageId) {
      return this.images[imageId].image;
    },
    imageTxt(imageId) {
      return this.images[imageId].caption;
    },

    imagePath(imageId) {
      const imageName = this.imageName(imageId);
      return `./images/${imageName}`;
    },
  }));
});
