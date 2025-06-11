const oddEven = (array) => {
  let evenNumbers = [];
  let oddNumbers = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 == 0) {
      evenNumbers.push(element);
    } else {
      oddNumbers.push(element);
    }
  }

  return {
    even: evenNumbers,
    odd: oddNumbers
  };
};

const result = oddEven([1, 2, 3, 4, 5, 6, 7, 8]);

console.log("Even:",result.even);
console.log("Odd:",result.odd); 
