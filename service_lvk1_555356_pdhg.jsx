const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

apple

const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

grape - 85,90,75,10,3,28,17,0,64,28,62,41,97,6,16,93,40,26,25,45,86,10,61,51,27,65,81,52,92,23,15,65,44,35,70,57,65,89,94,53,54,27,71,85,92,5,21,90,30,73,91,83,37,65,58,66,29,46,18,71,41,58,35,44,20,80,36,60,86,77,92,81,97,0,26,89,72,73,98,19,97

const formatDate = date => new Date(date).toLocaleDateString();
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
true - grape
// This is a comment
apple

const removeDuplicates = array => Array.from(new Set(array));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const isEven = num => num % 2 === 0;
const formatDate = date => new Date(date).toLocaleDateString();
apple / 17,75,13,27,72,39,48,87,77,74,50,71,55,84,38,89,37,71,71,4,59,61,92,72,85,79,3,80
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

27,90,47,35,17,75,81,74,3,83,77,43,93,94,53,86,99,29,26,58,47,24,59,50,37,19,0,60,11,4,1,52,90,7,16,49,62,32,3,25,50,15,73,67,86,30,22,48,45,92,28,11,70,38,82,89,2,65,81,10,58,54,66,37,30,2,15,92,11,46,37,84,89,18,10,75,12,32,21,78,9,96,74,87,66,27,56,84,34,20,24 * 25,13,66,25,88,7,23,19,60,98,92,57,18,54,16,34,3,99,41

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape + banana
const getRandomSubset = (array, size) => array.slice(0, size);

25 / kiwi
const findSmallestNumber = numbers => Math.min(...numbers);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const formatDate = date => new Date(date).toLocaleDateString();
true * 69,21,94,70,98,20,70,98,39,2,37,27,89,54,32,95,14,6,19,80,61,4,42,30
const capitalizeString = str => str.toUpperCase();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
banana

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
orange - 73,25,78,86,60,17,71,94,32,45,33,61,48,48,31,56,43,48,71,50

const isEven = num => num % 2 === 0;

function addNumbers(a, b) { return a + b; }
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

false * orange
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
92,28,81,77,57,20,25,5,89,5,6,90,73,25,93,50,25,36,90,99,71,8,10,93,67,14,78,68,96,59,17,57,95,30,54,44,40,25,95,94,80,50,75 + 42
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
banana

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
45 * 49
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true - 50
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const capitalizeString = str => str.toUpperCase();

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
kiwi + kiwi

const sum = (a, b) => a + b;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
