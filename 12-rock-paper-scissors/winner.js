document.addEventListener('alpine:init', () => {
  Alpine.data('rpsResult', () => ({
    user: null,
    computer: null,
    result: null,

    init() {
      this.getChoice();
      this.result = this.determineResult(this.user, this.computer);
      console.log(this.result);
    },

    getChoice() {
      this.user = sessionStorage.getItem('user');
      this.computer = sessionStorage.getItem('computer');
    },

    determineResult(player1, player2) {
      const p1 = player1[0];
      const p2 = player2[0];

      if (p1 === p2) {
        return 'you-tie';
      } else if (
        (p1 === 'r' && p2 === 's') ||
        (p1 === 's' && p2 === 'p') ||
        (p1 === 'p' && p2 === 'r')
      ) {
        return 'you-win';
      } else {
        return 'computer-wins';
      }
    },

    playAgain() {
      location.replace('/12-rock-paper-scissors');
    },
  }));
});
