const TicTacToe = require('discord-tictactoe');
new TicTacToe({ language: 'en', command: '!ttt' })
  .login(process.env.token)
  .then(() => console.log('TicTacToe bot is ready to be used.'));
