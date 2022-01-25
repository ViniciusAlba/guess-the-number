let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = querySelector('.guesses');
let lastResult = querySelector('.last-result');
let lowOrHi = querySelector('.low-or-hi');

let guessSubmit = querySelector('.guess-submit');
let guessField = querySelector('.guess-field');

let guessCount = 1;
let resetButton;