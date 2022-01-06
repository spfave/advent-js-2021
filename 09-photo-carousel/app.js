document.addEventListener('alpine:init', () => {
  Alpine.data('photoCarousel', () => ({
    images: images,
    imageId: 0,
    numImages: images.length,

    setImage(el) {
      console.log(`el: ${JSON.stringify(el)}`);
      this.imageId = el.dataset.id;
    },

    imageName(imageId) {
      return this.images[imageId].image;
    },
    imageTxt(imageId) {
      return this.images[imageId].caption;
    },

    nextImage() {
      this.imageId++;
      if (this.imageId === this.numImages) this.imageId = 0;
    },
    prevImage() {
      this.imageId--;
      if (this.imageId < 0) this.imageId = this.numImages - 1;
    },

    imagePath(imageId) {
      const imageName = this.imageName(imageId);
      return `./images/${imageName}`;
    },
  }));
});
