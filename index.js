
const firstBalance = 1500;
let balance = firstBalance;
let years = 0;

while (balance < 100000) {
  balance = balance * 2;
  years++;
}
console.log(`It takes ${years} years to reach $100,000.`);

while (balance < 1000000) {
  balance = balance * 2;
  years++;
}
console.log(`It takes ${years} years to reach $1,000,000.`);

