/**
 * Query all key elements
 * Based on array length choose random key (number)
 * For that number in the array of keys set the class
 */
const keys = document.querySelectorAll('.key');
const numKeys = keys.length;

document.addEventListener('alpine:init', () => {
  Alpine.data('keyboard', () => ({
    key: null,

    init() {
      document.addEventListener('keydown', this.checkKey);
      this.randomKey();
      console.log(this.key.classList);
    },

    randomKey() {
      const random = Math.floor(Math.random() * numKeys);
      this.key = keys[random];
      this.key.classList.toggle('jiggle');
    },

    checkKey(event) {
      console.log(event.key);
      console.log(event.code);
      // if (condition) {      }
    },
  }));
});
