/* With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
Output: (examples)
  1) input a = 1, then output : 1
  2) input a = 2, then output : 1
  3) input a = 3, then output : 1, 3, 5
  4) input a = 4, then output : 1, 3, 5
  5) input a = 5, then output : 1, 3, 5, 7, 9
  6) input a = 6, then output : 1, 3, 5, 7, 9
  .
  .
  7) input a = x, then output : 1, 3, 5, 7, ....... */

const generateOddSeries = (n) => {
  if (n % 2 === 0) {
    n -= 1;
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
};

console.log(generateOddSeries(1));
console.log(generateOddSeries(2));
console.log(generateOddSeries(3));
console.log(generateOddSeries(4));
