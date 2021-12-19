function i(word) {
  const wordArr = word.split("");
  let conson = 0;
  let vow = 0;
  const vowelList = "aeiouAEIOU";

  for (let n = 0; n < wordArr.length; n += 1) {
    if (vowelList.indexOf(wordArr[n]) === -1) {
      conson += 1;
    } else {
      vow += 1;
    }
  }

  function isLower(str) {
    return !/[A-Z]/.test(str) && /[a-z]/.test(str);
  }

  const conditions =
    wordArr === [] ||
    isLower(wordArr[0]) ||
    vow >= conson ||
    wordArr[0] === "I";

  if (conditions) {
    return "Invalid word";
  } else {
    wordArr.unshift("i");
    return wordArr.join("");
  }
}

// console.log(i("Phone"));
// console.log(i("World"));
// console.log(i("Human"));
// console.log(i("Programmer"));
// console.log(i("Inspire"));
// console.log(i("road"));
// console.log(i("East"));
// console.log(i(""));
// console.log(i("Peace"));

function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) return 0;

  return arr.find((el) => {
    if (!mixArr.includes(el)) return el;
  });
}

// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
// );
// console.log(
//   findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
// );

function repeatStr(n, s) {
  return s.repeat(n);
}

// console.log(repeatStr(3, "*"));
