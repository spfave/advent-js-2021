/** Plan:
 * 1. Query all key elements
 * 2. Based on array length choose random key
 * 3. For random key set jiggle class
 * 4. On keypress (event: keydown) check if pressed key matches current random key
 *    True: Toggle off current key and toggle on new random key, repeat
 *    False: do nothing
 */

const keys = document.querySelectorAll('.key');
const numKeys = keys.length;

document.addEventListener('alpine:init', () => {
  Alpine.data('keyboard', () => ({
    key: null,

    init() {
      document.addEventListener('keydown', (e) => {
        this.checkKey(e);
      });
      this.randomKey();
    },

    randomKey() {
      const random = Math.floor(Math.random() * numKeys);
      this.key = keys[random];
      this.toggleJiggle();
    },

    checkKey(event) {
      if (this.key.dataset.key === event.code) {
        this.toggleJiggle();
        this.randomKey();
      }
    },

    toggleJiggle() {
      this.key.classList.toggle('jiggle');
    },
  }));
});
