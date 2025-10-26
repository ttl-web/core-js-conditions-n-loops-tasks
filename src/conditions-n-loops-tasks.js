/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.y === king.y) {
    return true;
  }
  if (queen.x === king.x) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return a === b || a === c || b === c;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII',
    13: 'XIII',
    14: 'XIV',
    15: 'XV',
    16: 'XVI',
    17: 'XVII',
    18: 'XVIII',
    19: 'XIX',
    20: 'XX',
    21: 'XXI',
    22: 'XXII',
    23: 'XXIII',
    24: 'XXIV',
    25: 'XXV',
    26: 'XXVI',
    27: 'XXVII',
    28: 'XXVIII',
    29: 'XXIX',
    30: 'XXX',
    31: 'XXXI',
    32: 'XXXII',
    33: 'XXXIII',
    34: 'XXXIV',
    35: 'XXXV',
    36: 'XXXVI',
    37: 'XXXVII',
    38: 'XXXVIII',
    39: 'XXXIX',
  };
  return romanNumerals[num];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digitWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '1':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '2':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '3':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '4':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '5':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '6':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '7':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '8':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '9':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '-':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case '.':
        result += `${digitWords[numberStr[i]]}`;
        break;
      case ',':
        result += `${digitWords[numberStr[i]]}`;
        break;
      default:
    }
    if (i < numberStr.length - 1) {
      result += ' ';
    } else {
      result += '';
    }
  }
  return result;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversedStr = '';
  for (let i = 0; i < str.length; i += 1) {
    reversedStr += str[str.length - 1 - i];
  }
  return reversedStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let found;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      found = i;
    }
  }
  return found !== undefined ? found : -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isTrue = false;
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === String(digit)) {
      isTrue = true;
    }
  }
  return isTrue;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let totalSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }

  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let num = 1;
  let row = 0;
  let col = 0;
  let direction = 'right';

  while (num <= size * size) {
    matrix[row][col] = num;
    num += 1;

    if (direction === 'right') {
      if (col + 1 < size && matrix[row][col + 1] === 0) {
        col += 1;
      } else {
        direction = 'down';
        row += 1;
      }
    } else if (direction === 'down') {
      if (row + 1 < size && matrix[row + 1][col] === 0) {
        row += 1;
      } else {
        direction = 'left';
        col -= 1;
      }
    } else if (direction === 'left') {
      if (col - 1 >= 0 && matrix[row][col - 1] === 0) {
        col -= 1;
      } else {
        direction = 'up';
        row -= 1;
      }
    } else if (direction === 'up') {
      if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
        row -= 1;
      } else {
        direction = 'right';
        col += 1;
      }
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const tempMatrix = matrix;
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      const temp = matrix[i][j];
      tempMatrix[i][j] = matrix[j][i];
      tempMatrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = matrix[i][j];
      tempMatrix[i][j] = matrix[i][n - 1 - j];
      tempMatrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) return arr;

  function quickSort(a, left, right) {
    if (left >= right) return;

    const pivot = a[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (a[i] < pivot) i += 1;
      while (a[j] > pivot) j -= 1;

      if (i <= j) {
        const temp = a[i];
        const tempArr = a;
        tempArr[i] = a[j];
        tempArr[j] = temp;
        i += 1;
        j -= 1;
      }
    }

    quickSort(a, left, j);
    quickSort(a, i, right);
  }

  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (str.length < 2 || iterations === 0) return str;

  let result = str;
  let cycleFound = false;
  let cycleLength = 0;

  for (let i = 0; i < iterations; i += 1) {
    let evenChars = '';
    let oddChars = '';

    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 0) {
        evenChars += result[j];
      } else {
        oddChars += result[j];
      }
    }

    result = evenChars + oddChars;

    if (result === str) {
      cycleLength = i + 1;
      cycleFound = true;
      break;
    }
  }

  if (cycleFound) {
    const effectiveIterations = iterations % cycleLength;
    result = str;

    for (let i = 0; i < effectiveIterations; i += 1) {
      let evenChars = '';
      let oddChars = '';

      for (let j = 0; j < result.length; j += 1) {
        if (j % 2 === 0) {
          evenChars += result[j];
        } else {
          oddChars += result[j];
        }
      }

      result = evenChars + oddChars;
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  const n = digits.length;

  let i = n - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) return number;

  let j = n - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let k = 0; k < n; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
