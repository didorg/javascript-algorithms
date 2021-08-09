// Factorialize a Number With Recursion
const factorializeRecursion = (num) => {
  if (num < 0) return -1;
  else if (num === 0 || num === 1) return 1;
  else {
    return num * factorializeRecursion(num - 1);
  }
};
console.log(factorializeRecursion(5));

//Factorialize a Number with a FOR loop
// 1
function factorializeForLoopOne(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorializeForLoopOne(5));

//Factorialize a Number with a FOR loop
// 2
function factorializeForLoopTwo(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorializeForLoopTwo(5));
