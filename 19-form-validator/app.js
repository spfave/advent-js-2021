document.addEventListener('alpine:init', () => {
  Alpine.data('nameValidator', () => ({
    name: '',
    valid: false,
    invalid: false,
    // email: '',
    // password: '',
    // passwordC: '',

    validateName() {
      if (validator.isAlpha(this.name)) {
        this.valid = true;
        this.invalid = false;
      } else {
        this.valid = false;
        this.invalid = true;
      }
    },
  }));

  Alpine.data('emailValidator', () => ({
    email: '',
    valid: false,
    invalid: false,

    validateEmail() {
      if (validator.isEmail(this.email)) {
        this.valid = true;
        this.invalid = false;
      } else {
        this.valid = false;
        this.invalid = true;
      }
    },
  }));

});
