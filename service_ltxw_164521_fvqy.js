const getRandomElement = array => array[getRandomIndex(array)];
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const reverseString = str => str.split("").reverse().join("");
apple * grape
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana


const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

kiwi - grape
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const findLargestNumber = numbers => Math.max(...numbers);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
