/*
stacks

stacks are last in first out types of service (LIFO)
for eg. browser back button

function : push, pop, peek, length

*/

var letters = []; // this is our stack

var word = 'racecar';

var rword = '';

// put letters of word into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword = rword + letters.pop();
}

rword === word
  ? console.log(word + ' is a palindrom')
  : console.log(word + ' is not a palindrom');
