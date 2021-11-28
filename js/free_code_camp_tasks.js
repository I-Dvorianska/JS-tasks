function findLongestWordLength(str) {
  const arr = str.split(" ");
  return arr.reduce((longestWord, word) => {
    if (longestWord < word.length) {
      longestWord = word.length;
    }
    return longestWord;
  }, 0);
}

// console.log(
//   findLongestWordLength("May the force be with you"),
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

function largestOfFour(arr) {
  return arr.reduce((arr, item) => {
    const biggestNumber = Math.max(...item);
    arr.push(biggestNumber);
    return arr;
  }, []);
}

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

function confirmEnding(str, target) {
  // return str.endsWith(target);  easy way

  const targetLength = target.length;

  if (str.slice(-targetLength) === target) {
    return true;
  } else {
    return false;
  }
}

// console.log(
//   confirmEnding("Bastian", "b"),
//   confirmEnding("Open sesame", "same")
// );

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// console.log(repeatStringNumTimes("abc", 3), repeatStringNumTimes("abc", -2));

function truncateString(str, num) {
  if (str.length === num || str.length < num) {
    return str;
  } else {
    const newString = str.slice(0, num);
    return newString + "...";
  }
}

// console.log(
//   truncateString("A-tisket a-tasket A green and yellow basket", 8),
//   truncateString("A-", 1)
// );
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

function findElement(arr, func) {
  return arr.find((el) => func(el));
}

// console.log(
//   findElement([1, 2, 3, 4], (num) => num % 2 === 0),
//   findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)
// );

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

// console.log(booWho(null));
