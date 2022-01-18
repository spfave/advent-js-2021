document.addEventListener('alpine:init', () => {
  Alpine.data('validator', () => ({
    name: '',
    email: '',
    password: '',
    passwordC: '',

    validate() {},
  }));

});
