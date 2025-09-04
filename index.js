// Simple Hello World Application
console.log("Hello, World!");
console.log("Welcome to Back-To-School project!");
console.log("This is a simple Node.js application.");

// Add some interactive features
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}! Nice to meet you!`);
  console.log('Thanks for running this Hello World application.');
  rl.close();
});
