const inputs = document.querySelectorAll('input[type="text"]');

document.addEventListener('alpine:init', () => {
  Alpine.data('passcodeVerify', () => ({
    passcode: Array(4).fill(null),

    typeCode() {},

    pasteCode() {},

    checkPasscode() {
      const passcode = this.passcode.join('');
      console.log(`passcode:`, passcode);
    },
  }));
});

// on keydown shift focus
