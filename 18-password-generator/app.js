document.addEventListener('alpine:init', () => {
  Alpine.data('pwGenerator', () => ({
    password: '',
    numChar: 19,
    useSymbols: true,
    useNumbers: true,
    useLowerChar: true,
    useUpperChar: true,
    useSimChar: false,

    generatePassword() {},

    copyPassword() {},
  }));
});
