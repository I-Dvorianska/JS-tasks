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
