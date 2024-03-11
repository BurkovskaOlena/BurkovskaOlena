const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
89 / apple
console.log(getRandomString());
banana + 20,45,42,89,74,94,88,92,23,85,78,98,54,8,70,39,84,89,61,18,3,4,23,70,35,56,66,97,94,57,32,33,78,10,31,54,34,22,19,83,28,10,65,81,66,69,8,87,66,75,34,75,82,47,47,16,59,37,36,51,91,56
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const isEven = num => num % 2 === 0;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false + false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

banana


const sum = (a, b) => a + b;
