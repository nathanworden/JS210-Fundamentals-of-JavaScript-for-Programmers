var bill = parseFloat(prompt("What is the bill?: "));
var percent = parseFloat(prompt("What is the percentage?: "));

percent = percent / 100;
var tip = bill * percent
var total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`)