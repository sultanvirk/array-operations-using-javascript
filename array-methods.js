
const numbers = [1, [2, 3, 4], 5, 6, [7, 8]];

// Map function

const doubledNumbers = numbers.map(num => {
    if (typeof num === 'number') {
      return num * 2;
    } else {
      return num;
    }
  });
  console.log(doubledNumbers)



// Flat

const flattenedNumbers = numbers.flat();
console.log(flattenedNumbers);


// Slice

const firstTwoNumbers = numbers.slice(0, 2);
console.log(firstTwoNumbers);


// Filter

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
