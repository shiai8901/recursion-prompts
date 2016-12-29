/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n < 0) return null;
    if (n < 2) return 1;
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var copy = array.slice(0);
    if (copy.length === 0) return 0;
    if (copy.length === 1) return copy[0];
    return copy.pop() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var copy = array.slice(0);
    if (copy.length === 0) return 0;
    if (typeof copy[copy.length - 1] === 'number') return copy.pop() + arraySum(copy);
    if (Array.isArray(copy[copy.length - 1])) return arraySum(copy.pop()) + arraySum(copy);    
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0) return true;
    if (n === 1 || n === -1) return false;
    if (n > 1) return isEven(n - 2);
    return isEven(n + 2);   
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n <= 1 && n >= -1) return 0;
    if (n > 0) return sumBelow(n - 1) + n - 1;
    return sumBelow(n + 1) + n + 1;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (Math.abs(x - y) <= 1) return [];
    if (x < y) return range(x, y - 1).concat(y - 1);
    return range(x, y + 1).concat(y + 1);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) return 1;
    if (exp > 0 && base > 0) return base * exponent(base, exp - 1);
    if (exp > 0 && base < 0) return -(exponent(-base, exp));
    return 1 / exponent(base, -exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) return true;
    if (n < 2) return false;
    return powerOfTwo(n/2);    
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length < 2) return string;
    if (string.length === 2) return "".concat(string.charAt(1), string.charAt(0));
    return string.charAt(string.length - 1).concat(reverse(string.slice(1, string.length - 1)), string.charAt(0));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    var copy = string.toLowerCase().trim();
    if (copy.length === 1) return true;
    if (copy.length === 2) return copy.charAt(0) === copy.charAt(1);  
    return (copy.charAt(0) === copy.charAt(copy.length - 1)) && palindrome(copy.slice(1, copy.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) return NaN;
    if (x === y) return 0;
    if (x > 0 && x < y) return x;
    if (x > 0 && y < 0 && x < -y) return x;
    if (x < 0 && y > 0 && -x < y) return x;
    if (x < 0 && x > y) return x;
    if (x > 0 && y > 0 || x < 0 && y < 0) return modulo(x - y, y);
    if (x > 0 && y < 0) return modulo(x + y, y);
    return modulo(x + y, y);    
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x === 0 || y === 0) return 0;
    if (y === 1) return x;
    if (y === -1) return -x;
    if (y > 1 && x > 0) return x + multiply(x, y - 1);
    if (y < -1 && x > 0) return -multiply(x, -y);
    if (y > 1 && x < 0) return -multiply(-x, y);
    if (y < -1 && x < 0) return multiply(-x, -y);    
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
    if (y === 0) return NaN; 
    if (y === 1) return x;
    if (x === y) return 1;
    if (x === -y) return -1;
    if (x < y && x > 0 || -x < -y && x < 0 || x < -y && y < 0 || -x < y && x < 0) return 0;
    if (x > y && y > 0) return 1 + divide(x - y, y);
    if (x < y && y < 0) return divide(-x, -y);
    if ((x > -y && y < 0) || (-x > y && y > 0)) return -divide(x, -y);
    return 0;        
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) return null;
    if (y === 0) return x;
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) return true;
    if (str1.length + str2.length === 1) return false;
    if (str1.length === 1 && str2.length === 1) return str1.charAt(0) === str2.charAt(0);
    return str1.charAt(0) === str2.charAt(0) && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if (str.length === 0) return [];
    if (str.length === 1) return [].concat(str);
    return createArray(str.slice(0, str.length - 1)).concat(str.charAt(str.length - 1));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length === 1) return array;
    if (array.length === 2) return [array[1], array[0]];
    return [].concat(array[array.length - 1], reverseArr(array.slice(1, array.length - 1)), array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 1) {
        var array = [];
        array.push(value);
        return array;
    }
    var array = buildList(value, length - 1);
    array.push(value);
    return array;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    if (n === 1) return ['1'];
    if (n % 3 === 0 && n % 5 === 0) return fizzBuzz(n-1).concat('FizzBuzz');
    if (n % 3 === 0 && n % 5 !== 0) return fizzBuzz(n-1).concat('Fizz');
    if (n % 3 !== 0 && n % 5 === 0) return fizzBuzz(n-1).concat('Buzz');  
    return fizzBuzz(n - 1).concat(n.toString());
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 1 && !isNaN(value)) return array[0] === value;
    if (array.length > 1 && !isNaN(value)) return countOccurrence(array.slice(1), value) + (array[0] === value);
    if (array.length === 1 && isNaN(value)) return isNaN(array[0]);
    if (array.length > 1 && isNaN(value)) return countOccurrence(array.slice(1), value) + isNaN(array[0]);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if (array.length === 1) return [].concat(callback(array[0]));
    return rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1]));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var count = 0;
    for (var keys in obj) {
        count += (keys === key); 
        if (typeof obj[keys] === 'object') {
            count += countKeysInObj(obj[keys],key);
        }
    }
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    for (var keys in obj) {
        count += (obj[keys] === value);
        if (typeof obj[keys] === 'object') {
            count += countValuesInObj(obj[keys], value);
        }
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    for (var keys in obj) {
        if (keys === oldKey) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
        if (typeof obj[keys] === 'object') {
            replaceKeysInObj(obj[keys], oldKey, newKey);
        }
    }
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n < 1) return null;
    if (n === 1) return [0, 1];
    var array = fibonacci(n - 1);
    var newElement = array[array.length - 1] + array[array.length - 2];
    return fibonacci(n - 1).concat(newElement);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n > 1) return nthFibo(n - 1) + nthFibo(n - 2); 
    return null;
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    if (array.length === 1) return [].concat(array[0].toUpperCase());
    return capitalizeWords(array.slice(0, array.length - 1)).concat(array[array.length - 1].toUpperCase());
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    var char = array[array.length - 1].charCodeAt(0);
    var newChar = String.fromCharCode(char - 32);
    var newElement = newChar.concat(array[array.length - 1].slice(1));
    if (array.length === 1) return [].concat(newElement);
    return capitalizeFirst(array.slice(0, array.length - 1)).concat(newElement);
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var sum = 0;
    for (var keys in obj) {
        if (typeof obj[keys] === 'number' && obj[keys] % 2 === 0) sum += obj[keys];
        if (typeof obj[keys] ==='object') sum += nestedEvenSum(obj[keys]);
    }
    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') result = result.concat(array[i]);
        if (Array.isArray(array[i]) && array[i].length !== 0) result = result.concat(flatten(array[i]));
    }
    return result;  
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
    if (arguments.length === 1) var obj = {};
    if (str.length === 0) return obj;
    var char = str.charAt(0);
    if (obj[char] === undefined) {
        obj[char] = 1;
    } else {
        obj[char]++;
    }
    return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length === 1) return [].concat(list[0]);
    if (list[list.length - 1] !== list[list.length - 2]) 
        return compress(list.slice(0, list.length - 1)).concat(list[list.length - 1]);
    return compress(list.slice(0, list.length - 1));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    for (var i = 0; i < array.length; i++) {
       array[i] = array[i].concat(aug);
    }
    return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 1) return [].concat(array[0]);
    if (array[array.length - 1] !== 0) 
        return minimizeZeroes(array.slice(0, array.length - 1)).concat(array[array.length - 1]);
    if (array[array.length - 1] === 0 && array[array.length - 2] !== 0)
        return minimizeZeroes(array.slice(0, array.length - 1)).concat(array[array.length - 1]);
    return minimizeZeroes(array.slice(0, array.length - 1));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 1) return [].concat(Math.abs(array[0]));
    if (array.length % 2 === 0) 
        return alternateSign(array.slice(0, array.length - 1)).concat(-Math.abs(array[array.length - 1]));
    return alternateSign(array.slice(0, array.length - 1)).concat(Math.abs(array[array.length - 1])); 
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (str.indexOf(" ") === -1 && Number.isNaN(Number.parseInt(str))) return str;
    if (str.indexOf(" ") === -1 && !Number.isNaN(Number.parseInt(str))) return nums[Number.parseInt(str)];
    return numToText(str.slice(0, str.indexOf(" "))).concat(" ", numToText(str.slice(str.indexOf(" ") + 1)));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    if (node === undefined) node = document.body;
    var count = 0;
    if (node.localName === tag) count += 1;
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            count += tagCount(tag, node.children[i]);
        }
    }
    return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    if (arguments.length === 2) return binarySearch(array, target, 0, array.length - 1);
    var mid = Math.floor((max + min) / 2);
    if (target === array[mid]) return mid;
    if (target < array[mid] && min < mid) return binarySearch(array, target, min, mid - 1);
    if (target > array[mid] && mid < max) return binarySearch(array, target, mid + 1, max);
    return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    if (array.length === 1) return array;
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
};
// this is the helper function for mergeSort
var merge = function(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
    if (Array.isArray(input)) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            var element = clone(input[i]);
            result.push(element);
        }
        return result;
    } else if (typeof input === 'object') {
        var result = {};
            for (var key in input) {
                result[key] = clone(input[key]);
            }
        return result;
    } else {
        return input;
    }   
};
