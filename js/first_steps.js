'use strict';

// MODULE 1


// function getSubscriptionPrice(type) {
//   let price;

//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter' // Дополни эту строку
//       :price = 0; // porque se pone dos puntos antes de price
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }




// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case 'Китай':
//       message = `Доставка в ${'Китай'} будет стоить ${100} кредитов`;
//     case 'Чили':
//       message = `Доставка в ${'Чили'} будет стоить ${250} кредитов`;
//     case 'Австралия':
//       message = `Доставка в ${'Австралия'} будет стоить ${170} кредитов`;
//     case 'Ямайка':
//       message = `Доставка в ${'Ямайка'} будет стоить ${120} кредитов`;
//     default:
//       message = 'Извините, в вашу страну доставки нет';
//   }
//   // Пиши код выше этой строки
//   return message;
// }


// function getSubstring(string, length) {
//   const substring = string.slice(0, [length]); // Дополни эту строку

//   return substring;
// }

// SLICE

// function formatMessage(message, maxLength) {
//   let result;

// if (message.length <= maxLength) {
// result = message;
// } else {
// result = message.slice(0, [maxLength]) + '...';
// }
//   return result;
// }


// function checkForSpam(message) {
//   let result;

//  let messagenormalize = message.toLowerCase();
//  if (messagenormalize.includes('spam') || messagenormalize.includes('sale')) {
//   result = true; 
//  } else {
//  result = false;
//  }

//   return result;
// }

// MODULE 2

// 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'; 

//  if (password === ADMIN_PASSWORD) {
//    return 'Добро пожаловать!'}
//    return 'Доступ запрещен, неверный пароль!';
// }


// 3

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//     return 'Заказ оформлен, с вами свяжется менеджер';
// }


// 4

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];


// 9

// Напиши функцию getExtremeElements(array) которая принимает один параметр array -
//     массив элементов произвольной длины.Функция должна возвращать
// массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//  const newArray = [];
//    newArray.push(array[0]);
//   newArray.push(array[array.length-1]);

// return newArray;
//     // Пиши код выше этой строки
//   }


// // сумма четных чисел

// const numbers = [1, 6, 10, 13, 15, 18, 23, 33, 44, 50, ];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {

//         console.log('yes');
//         total += numbers[i];
//     }

// }
//  console.log('total:',total);

// 10

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//    words = message.split(`${delimeter}`);

//   // Пиши код выше этой строки
//   return words;
// }

// console.log(splitMessage('Buenos dias',(' ')))


// 11

// Сервису гравировки украшений нужна функция,
// которая бы автоматически считала цену гравировки,
// в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых
// только пробелами(параметр message) и цену гравировки одного
// слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//     let totalPrice = 0;
//     let words;

//     words = message.split(' ');
//     totalPrice = words.length * pricePerWord;

//     return totalPrice;
// }

// console.log(calculateEngravingPrice('te quiero', 5));


// 12

// function makeStringFromArray(array, delimeter) {
//   let string;

//  string = array.join(`${delimeter}`);

//   return string;
// }

// 13

// function slugify(title) {

//  const smallLetters = title.toLowerCase().split(' ');
//  const slug = smallLetters.join('-');

//  return slug;

// }

// console.log(slugify('me voy a casa'));



// 14

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);

// 15

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); 


// 16

// function makeArray(firstArray, secondArray, maxLength) {

//     let newArray = [];

//   newArray = firstArray.concat(secondArray).slice(0,maxLength);

//   return newArray;

//   }

// makeArray([2, 4, 7, 9, 23, 64, 1], [2, 6, 8], 10);

// 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Дополни эту строку
//   console.log(i);
// }

// 18


// function calculateTotal(number) {

//   let total = 0;

// for (let i = 1; i <= number; i += 1) {

// total += i;

// }
//   return total;

// }

// console.log(calculateTotal(3));

// 19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i+=1){
//         total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([1,2,3]));

// 21

// function findLongestWord(string) {

//   let longestWord = '';

//    const stringArray = string.split(' ');


//     for (let i = 0; i < stringArray.length; i += 1) {


//       if (stringArray[i].length > longestWord.length) {
//           longestWord = stringArray[i];

//   }
//   }
//     return longestWord;
// }

// console.log(findLongestWord('May the force be with you'));

// 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (let i = min; i <= max; i+=1) {
// numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// 23

// function filterArray(numbers, value) {
//     let newArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     }
//     return newArray;
// }

// 24


// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];



//   return fruits.includes(fruit); // Дополни эту строку
// }

// 25

// function getCommonElements(array1, array2) {
//     let newArray = [];

//     for (const element of array1) {
//         if (array2.includes(element)) {
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// 27

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
    

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// 28

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// 29

// function getEvenNumbers(start, end) {
//     let newArray = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             newArray.push(i);
//         }
//     }
//     return newArray;
// }
// console.log(getEvenNumbers(1, 10));