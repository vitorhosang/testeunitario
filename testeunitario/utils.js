function getRandomOddNumberInRange(start, end) {
  let randomOddNumber;
  while (!randomOddNumber || randomOddNumber % 2 === 0) {
    randomOddNumber = Math.floor(Math.random() * (end - start + 1)) + start;
  }
  return randomOddNumber;
}

function findSmallestOddNumber(numbers) {
  let smallestOdd = null;
  for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
    if (currentNumber % 2 !== 0 && (smallestOdd === null || currentNumber < smallestOdd)) {
      smallestOdd = currentNumber;
    }
  }
  return smallestOdd;
}

module.exports = {
  getRandomOddNumberInRange,
  findSmallestOddNumber,
};
