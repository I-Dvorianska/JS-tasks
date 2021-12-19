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

function titleCase(str) {
  const updateString = str.toLowerCase();
  return updateString
    .split(" ")
    .map((el) => {
      return el.replace(el[0], el[0].toUpperCase());
    })
    .join(" ");
}

// console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  return arr.filter((el) => Boolean(el) === true);
}

// console.log(
//   bouncer([7, "ate", "", false, 9]),
//   bouncer([false, null, 0, NaN, undefined, ""])
// );

function getIndexToIns(arr, num) {
  const newArr = [...arr, num].sort((a, b) => a - b);

  return newArr.indexOf(num);
}

// console.log(getIndexToIns([40, 60], 50));

function mutation(arr) {
  const newArr = arr.map((string) => string.toLowerCase());
  return [].every.call(newArr[1], (item) => newArr[0].includes(item));
}

// console.log(mutation(["Hello", "hey"]), mutation(["Mary", "Aarmy"]));

function chunkArrayInGroups(arr, size) {
  let subArray = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i += 1) {
    subArray[i] = arr.slice(i * size, i * size + size);
  }
  return subArray;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
