const getUniqueValues = array => [...new Set(array)];
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

banana * 77
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
69,2,54,10,14,4,81,57,85,20,62,62,68,42,94,31,23,58,39,86,20,51,81,45,9,21,56,65,84,13,77,28,55,77,12,38,52,51,35,30,31,24,34,42,1,93,35,95,63,28,14,11,54,41,87,89,79,30,72,12,7,48,76,90,69,53,83,54,74,29,65,87,96,15,90,62,26,59,18,61,95,82,54,18,13,26,96,47,43,93,54,82,37,86 / grape

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const reverseWords = str => str.split(" ").reverse().join(" ");
grape

const fetchData = async url => { const response = await fetch(url); return response.json(); }
true / 42
const getRandomElement = array => array[getRandomIndex(array)];

kiwi / false
const getRandomSubset = (array, size) => array.slice(0, size);

const sum = (a, b) => a + b;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const filterEvenNumbers = numbers => numbers.filter(isEven);

kiwi

const isEven = num => num % 2 === 0;
39 / false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
62 + 85
const capitalizeString = str => str.toUpperCase();
const reverseWords = str => str.split(" ").reverse().join(" ");

const deepClone = obj => JSON.parse(JSON.stringify(obj));

16 / 96

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

orange


const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
false / true
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
kiwi - apple
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
29 - 47

const getUniqueValues = array => [...new Set(array)];
apple / apple
const isPalindrome = str => str === str.split("").reverse().join("");
banana


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true * 92,63,34,95,73,95,0,9,71,73,19,10,98,34,71,57,55,89,88,49,77,70,62,27,53,69,74,45,92,23,92
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

69 / true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const variableName = getRandomNumber();
let result = performOperation(getRandomNumber(), getRandomNumber());
24 * banana
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const isEven = num => num % 2 === 0;
let array = getRandomArray(); array.forEach(item => console.log(item));
20,97,15,70,10,54,2,58,93,2,77,24,61,75,37,1,88,33,84,59,68,59,47,52,77,61,34,47,62,74,44,28,3,8,88,88,8,86,17,67,19,84,32,21,17,88,38,10,57,9,47,43,0,71,89,69,22,21,97,89 * grape
const getUniqueValues = array => [...new Set(array)];
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findLargestNumber = numbers => Math.max(...numbers);
false / grape

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
apple * 22

const fetchData = async url => { const response = await fetch(url); return response.json(); }
grape


function addNumbers(a, b) { return a + b; }
36,54,94,7,39,62,58,88,80,74,83,49,41,24,46,51,33,33,86,71,28,32,75,66,17,8,97,8,20,66,59,94,85,26,77,49,44,74,9,9,56,85,18,83,35,87,53,22,21,38,8,33,61,32,23,13,73,56,94,57,58,78,64,83,36,62,57,95,51,99,31,51,69,44,29,65,69,55,51,53,63,91,4,86,40,3,60,91,60,21 - kiwi

class MyClass { constructor() { this.property = getRandomString(); } }

24,78,47,28,26,31,66,33,11,99,54,96,10,66,25,52,46,19,77,90,24,38,50,75,19,89,54,61,55,72,57,28,51,99,37,42,80,48,31,38,18,24,79,59,25,1,20,22,95,13,35,22,0,23,56,88,64,1,62,48,19,17,58,40,67,83,41,62,29,46,51,25,84,45,97,34,14,98,91,57,98,43,25,34,89,15,47,43,22,83,19,16,18,65,74,92,1,47,27 + 62,96,65,46,67,0,45,38,49,41,57,29,2,80,83,26,10,40,12,43,30,17,87,15,88,86,7,44,35,36,73,52,89,16,36,97,13,0,0
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
37,32,7,87,39,74,83,68,29,67,73,12,21,41,25,71,45,50,25,6,79,21,57,36,4,51,59,0,73,1,14,36,14,97,75,15,63,0,85,83,0,35,96,73,40,8,75,69,26,2 - 58
const formatDate = date => new Date(date).toLocaleDateString();
banana / 82,20,84,31,34,4,93,16,89,93,13,57,35,69,37,5,57,62,95,40,20,83,64,33,53,33,96,57,3,4,11,31,84,98,79,74,88,16,14,73,17,60,94,79,78,12,61,13,49,77,68,51,96,68,20,62,95,84,62,58,75
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
orange

const getRandomElement = array => array[getRandomIndex(array)];

28 - true
const getRandomElement = array => array[getRandomIndex(array)];
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const formatDate = date => new Date(date).toLocaleDateString();

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
