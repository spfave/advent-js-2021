document.addEventListener('alpine:init', () => {
  Alpine.data('creditCard', () => ({
    card: {
      type: 'visa',
      number: '',
      holder: '',
      expiration: { month: '', year: '' },
      cvv: '',
    },
    flip: false,

    displayCardType() {
      const ccn = this.card.number;
      if (ccn.startsWith('34') || ccn.startsWith('37')) {
        this.card.type = 'american';
      } else if (ccn.startsWith('4')) {
        this.card.type = 'visa';
      } else if (ccn.startsWith('5')) {
        this.card.type = 'mastercard';
      } else if (ccn.startsWith('6')) {
        this.card.type = 'discover';
      } else {
        alert('Enter a valid credit card number');
      }
    },

    // displayCardNumber() {
    //   const ccn = this.card.number;
    //   return `${ccn.slice(0, 4)} ${ccn.slice(4, 9)}
    //     ${ccn.slice(9, 13)} ${ccn.slice(13)}`;
    // },

    enterCVV() {
      this.flip = !this.flip;
    },
  }));
});
