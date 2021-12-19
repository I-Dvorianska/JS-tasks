// 1) Напиши скрипт, который, для объекта user,
// последовательно:

// a. добавляет поле mood со значением 'happy'
// b. заменяет значение hobby на 'skydiving'
// c. заменяет значение premium на false
// d. выводит содержимое объекта user в формате
// ключ:значение
// используя Object.keys() и for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true
// };

// function addChanges(object) {
//     object.mood = 'happy';
//     object.hobby = 'skydiving';
//     object.premium = false;

//     for (const key of Object.keys(object)) {
//         console.log( `${key}:${object[key]}`);

//     }
//     return object;
// }
// console.log(addChanges(user));

// ARRAY.FILTER!!!!

// function counter (element) {
//     return element >= 20;
// }
// const numbers = [1, 6, 10, 56, 13, 15, 18, 23, 33, 44, 50];

// const newNumbers = numbers.filter(counter);
// console.log(newNumbers);

// CONTINUE

// for (let i = 1; i <= 15; i += 1){

// // список цифр без 5 і без 13

//     if (i === 5) {
//         continue;
//     }
//     if(i === 13){
//         continue;
//     }

//     console.log(i);
// }

// const countNumbers = function (a, b, callback) {
//     const result = callback(a, b);
//     return result;
// };

// console.log(countNumbers(3, 3, (r, t) => r + t));

// option 1

// function findShort(s){
//  const arr = (s.split(' '));

//     console.log(arr);
//     let shortestWord = arr[0].length;
//     for (const element of arr) {

//         if (element.length < shortestWord) {
//              shortestWord = element.length;
//         }

//     }
//     return shortestWord;
// }

// option 2

// function findShort(s){
//      return Math.min(...s.split(" ").map (s => s.length));

// }

// console.log(findShort("ProofOfStake Factom Factom LiteCoin Ethereum Ripple Classic BTC Dash ProofOfWork Steem BTC 21inc Mine BTC Steem LiteCoin"));

// function sortByLength(array) {
//     array.sort(function (a, b) { return a.length - b.length });
//     return array;
// };

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// function removeSmallest(numbers) {
//     const numbersArray = [...numbers];

//     const smallest = Math.min(...numbersArray);

//     const indexOfNumber = numbersArray.indexOf(smallest);
//     numbersArray.splice(indexOfNumber, 1);
//     return numbersArray;
// }
// console.log(removeSmallest([4, 2, 3, 1, 5]));

// function filter_list(l) {
//    return l.filter(element => typeof element === 'number');
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1,'a','b',0,15]));

// function stray(numbers) {
//     numbers.reduce((newArr, el) => {
//         if (newArr[el] !== el) newArr.push(el);
//         return newArr;
//     }, [])

// }
// console.log(stray([1, 1, 2]));

// function descendingOrder(n){

//     return Number(n.toString().split('').sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));

// function friend(friends) {

//     return friends.filter(friend => friend.length === 4)

//     const names = [];

//     friends.forEach(friend => {
//         if (friend.length === 4) {
//             names.push(friend);
//         }
//     });
// return names;
//  }
// console.log(friend(["Ryan", "Kieran", "Mark"]));

// BINARY SEARCHING

const numbers = [
  12, 1, 3, 4, 23, 65, 13, 76, 2, 9, 89, 78, 53, 81, 40, 80, 50, 10,
];
const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers);

function binarySearch(val, arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (val === arr[mid]) {
      return mid;
    } else if (val <= arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch(7, sortedNumbers));

// let num = 1;
function recursion(n) {
  if (n === 0) return;

  num *= n;

  recursion(n - 1);
  return num;
}
// console.log(recursion(4));

// const array = [2, 3, 4, 5, 6, 7];

// let sum = 0;
// let index = 0;

function sumOfNum(arr) {
  if (index > arr.length - 1) return;

  sum += arr[index];
  index += 1;
  sumOfNum(arr);
  return sum;
}

// console.log(sumOfNum(array));

const str = "JavaScript";
const strArr = str.split("");

function inverse(str) {
  const lastIndex = str.length - 1;

  if (lastIndex < 0) {
    return;
  } else if (lastIndex > 0) {
    return str[lastIndex] + inverse(str.slice(0, lastIndex));
  } else {
    return str;
  }
}

// console.log(inverse(strArr));

function countLetter(str, letter) {
  const lettersArr = str.split("");

  return lettersArr.reduce((acc, el) => {
    if (el === letter) {
      acc += 1;
    }
    return acc;
  }, 0);
}

// console.log(countLetter(str, "a"));
let sum = 0;

function recCountLetter(str, letter) {
  const lettersArr = str.split("");
  if (lettersArr.length === 0) return;

  if (lettersArr[0] === letter) {
    sum += 1;
    recCountLetter(str.slice(1), letter);
  } else {
    recCountLetter(str.slice(1), letter);
  }
  return sum;
}

// console.log(recCountLetter(str, "a"));
