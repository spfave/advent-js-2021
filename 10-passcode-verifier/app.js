const inputs = document.querySelectorAll('input[type="text"]');

document.addEventListener('alpine:init', () => {
  Alpine.data('passcodeVerify', () => ({
    passcode: Array(4).fill(null),

    typeCode(codeId) {
      if (codeId === this.passcode.length) {
        this.checkPasscode();
        return;
      }

      inputs[codeId].focus();
    },

    pasteCode(event) {
      const pastText = (event.clipboardData || window.clipboardData).getData(
        'text'
      );
      this.passcode = [pastText[0], pastText[1], pastText[2], pastText[3]];
      inputs[this.passcode.length - 1].focus();
      this.checkPasscode();
    },

    checkPasscode() {
      const passcode = this.passcode.join('');
      console.log(`passcode:`, passcode);
    },
  }));
});

// on keydown shift focus
