document.addEventListener('alpine:init', () => {
  Alpine.data('rpsGame', () => ({
    choices: ['rock', 'paper', 'scissors'],
    user: null,
    computer: null,

    setChoice(choice) {
      this.user = choice;
      this.saveChoice('user', this.user);
      this.randomChoice();
      location.replace('winner.html');
    },

    randomChoice() {
      const random = Math.floor(Math.random() * 3);
      this.computer = this.choices[random];
      this.saveChoice('computer', this.computer);
    },

    saveChoice(user, choice) {
      sessionStorage.setItem(user, choice);
    },
  }));
});
