import color from "./color.js";

console.log(color(`Hello {red}RED{/red} and {green}GREEN{/}!`));
console.log(color(`Make me {bright}BRIGHT{/} or {dim}DIM{/}`));

// You won't overwrite the prototype with `console.color = ...`, right??
const colog = (...args) => console.log(color(...args));

colog("I'm {bggreen} very green {/}!");
colog`Hi there, {bright}${process.env.USER}{/}!`;
