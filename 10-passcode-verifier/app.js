const inputs = document.querySelectorAll('input[type="text"]');

document.addEventListener('alpine:init', () => {
  Alpine.data('passcodeVerify', () => ({
    passcode: Array(4).fill(null),

    typeCode(codeId) {
      console.log(`type`);
      if (codeId === this.passcode.length) {
        this.checkPasscode();
        return;
      }

      inputs[codeId].focus();
    },

    pasteCode() {
      console.log(`paste`);
    },

    checkPasscode() {
      const passcode = this.passcode.join('');
      console.log(`passcode:`, passcode);
    },
  }));
});

// on keydown shift focus
