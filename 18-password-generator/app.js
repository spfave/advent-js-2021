const charLists = {
  s: '`~!@#$%^&*()-_=+[]{}\\|;:\'",.<>/?'.split(''), // symbols
  n: '012346789'.split(''), // numbers
  nES: '2346789'.split(''), // numbers exclude similar characters
  l: 'abcdefghijklmnopqrstuvwxyz'.split(''), // lowercase letters
  lES: 'abcdefghjkmnopqrstuvwxyz'.split(''), // lowercase letters exclude similar characters
  u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), // uppercase letters
  uES: 'ABCDEFGHIJKMNPQRSTUVWXYZ'.split(''), // uppercase letters exclude similar characters
};

const randomSelect = (arr) => {
  const select = Math.floor(Math.random() * arr.length);
  return arr[select];
};

document.addEventListener('alpine:init', () => {
  Alpine.data('pwGenerator', () => ({
    password: '',
    numChar: 19,
    useSymbols: true,
    useNumbers: true,
    useLowerChar: true,
    useUpperChar: true,
    useSimChar: false,

    init() {
      this.generatePassword();
    },

    generatePassword() {
      let charChoice = [];

      // Create array of usable password characters
      if (this.useSymbols) charChoice.push(charLists.s);
      if (this.useNumbers) {
        if (this.useSimChar) charChoice.push(charLists.n);
        else charChoice.push(charLists.nES);
      }
      if (this.useLowerChar) {
        if (this.useSimChar) charChoice.push(charLists.l);
        else charChoice.push(charLists.lES);
      }
      if (this.useUpperChar) {
        if (this.useSimChar) charChoice.push(charLists.u);
        else charChoice.push(charLists.uES);
      }
      charChoice = charChoice.flat();

      // Randomly selected password characters
      const passwordChar = [];
      for (let char = 0; char < this.numChar; char++) {
        passwordChar.push(randomSelect(charChoice));
      }

      this.password = passwordChar.join('');
    },

    copyPassword() {
      const copyBtn = document.querySelector('button.copy');

      navigator.clipboard.writeText(this.password);
      copyBtn.classList.add('copied');

      setTimeout(() => copyBtn.classList.remove('copied'), 5000);
    },
  }));
});
