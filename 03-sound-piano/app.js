document.addEventListener('alpine:init', () => {
  Alpine.data('piano', () => ({
    init() {
      for (let key = 1; key <= 23; key++) {
        const sound = new Audio(`./audio/key-${key}.mp3`);
        this.sounds[key] = sound;
      }
    },

    sounds: {},

    playSound(key) {
      this.sounds[key].cloneNode(true).play();
    },
  }));
});
