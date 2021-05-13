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

// 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки


//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {

//       return i;
//     }
//   }


//   // Пиши код выше этой строки
// }

// 32

// function includes(array, value) {
//   // Пиши код ниже этой строки
// for (let i = 0; i < array.length; i +=1) {
//  if (array[i] === value) {
//    return true;
//  }
// }
// return false;

//   // Пиши код выше этой строки
// }







// MODULE 3

// 1

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     }
//   };

// 3

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };

//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

// 4

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// 5

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// 6

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// 7

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';

// 8

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
//   price,
//   image,
//   tags,
// };

// 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
// [emailInputName]: 'henry.carter@aptmail.com',
//    [passwordInputName]: 'jqueryismyjam',

//   // Пиши код выше этой строки
// };

// 10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (key in apartment) {
// keys.push(key);
//   values.push(apartment[key]);
// }

// 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);}

//   // Пиши код выше этой строки
// }

// 12

// function countProps(object) {
//   let propCount = 0;
 
//     for (const key in object) {
//         if (object.hasOwnProperty([key]) === false) {
//             
//         } else {
//             propCount = Object.keys(object).length;
//         }  
//     }
    
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// 13

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
    
    
//     values.push(apartment[key]);
    
// }
// console.log(values);

// 14

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key of Object.keys(object)) {
    
//       propCount += 1;
    
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// 15

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//     for (const key of Object.keys(salaries)) {
        
//         totalSalary += salaries[key];
// }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// 18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
         
//         if (product.name === productName) {
           
//             return product.price;
//         } 
//     }
// return null;
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));

// 19

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const valuesArray = [];

//     for (const product of products) {
//         const keys = Object.keys(product);
       
//         for (const key of keys) {
//             console.log(key);
//             if (key === propName) {
//                 valuesArray.push(product[key]);
//            }
//         }
//     }
//     return valuesArray;
// }

// console.log(getAllPropValues('quantity'));

// 20

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//    { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let sum = 0;

//     for (const product of products) {
//         console.log(product.name);
//         if (product.name === productName) {
//              sum = product.price * product.quantity;
//     }
//     }
//     return sum;
// }
// console.log(calculateTotalPrice('Дроид'));

// 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday, tomorrow, today } = highTemperatures;


// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // Пиши код ниже этой строки
// const { yesterday, tomorrow, today, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;


// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;


// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const { today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//     tomorrow: { low: lowTomorrow, high: highTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } }  = forecast;

// 26

// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh}} = forecast;
  

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores))

// 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};

// 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';

//     const newOb = {category,priority,completed,...data};

//     return newOb;
// }

// 31

// Пиши код ниже этой строки
// function add(...args) {
//   let sum = 0;
  
//   for(const number of args) {
//   sum += number;
//   }
//   return sum;
//   // Пиши код выше этой строки
// }

// 32

// // Пиши код ниже этой строки
// function addOverNum(firstElement,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > firstElement){
//     total += arg;
//   }};

//   return total;
//   // Пиши код выше этой строки
// }

// 33
 
// // Пиши код ниже этой строки
// function findMatches(array,...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args){
// 	for (const element of array) {
//     if (arg === element) {
//     matches.push(arg);
//     }
//     }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

// 34

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//   return `Удаляем книгу ${bookName}`;
//   },
  
//   updateBook(oldName, newName) {
//   return `Обновляем книгу ${oldName} на ${newName}`;
//   }
//   // Пиши код выше этой строки
// };

// 35

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	const bookIndex = this.books.indexOf(oldName);
// 	this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Пиши код выше этой строки
//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));

// 36

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };

// 37

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//   return this.potions;
//   },
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());

// 38

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// 39

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const deletedIndex = this.potions.indexOf(potionName);
//     this.potions.splice(deletedIndex, 1);
//     // Пиши код выше этой строки
//   },
// };

// 40

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//     // Пиши код ниже этой строки
//      getPotions() {
    
//     return this.potions;
//   },

//     addPotion(potionName) {
//       for (const element of this.potions) {
  
//       if (element === potionName) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//      };
//       this.potions.push(potionName);
//       return this.potions;
//     },
//      removePotion(potionName) {

    
//      for (const element of this.potions) {
//        const potionIndex = this.potions.indexOf(element);
//        const elementName = element.name;
  
//        if (elementName === potionName) {
//          return this.potions.splice(potionIndex, 1);
//    }

//    }
//      return `Зелья ${potionName} нет в инвентаре!`;
//    },
//    updatePotionName(oldName, newName) {
  
//      for (const element of this.potions) {
//        const potionIndex = this.potions.indexOf(element);
//        if (element.name === oldName) {
//          return element.name = newName;
//        }
//      }
//      return `Зелья ${oldName} нет в инвентаре!`;
//    },
 
//  };
  

  
//   // Пиши код выше этой строки

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));


// MODULE 4

// 1

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// 2

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// 3

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName)
//           {console.log(`Едим пиццу ${pizzaName}`);}
//          );

// 4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
        
//       if (this.pizzas.includes(pizzaName)) {
//   return makePizza(pizzaName);
//   }
//     return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// pizzaPalace.order('Венская', makePizza, onOrderError);

// 5

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };


// 6

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// 7

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// };

// const messages = [];

// for (let i = 0; i <= orders.length-1; i+=1 ) {
//   messages.push(composeMessage.call(orders[i], i+1));
// }

// console.log(messages);

// 8

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// 9

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// 10

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


// MODULE 5

// 1

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// 2

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// 3

// function Car (brand, model, price) {
// this.brand = brand,
//   this.model = model,
//   this.price = price
// }

// 4

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// 5

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
  
// }

// Car.prototype.getPrice = function() {
//  return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
// return this.price = newPrice;
// }

// 6

// function Storage(items) {
// this.items = items;
// }

// Storage.prototype.getItems = function() {
// return this.items;
// }
// Storage.prototype.addItem = function(newItem) {
// this.items.push(newItem);
// }
// Storage.prototype.removeItem = function(item) {
//   const itemIndex = this.items.indexOf(item)
// this.items.splice(itemIndex,1);
// }


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 7

// function StringBuilder (baseValue) {
// this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
// return this.value;}

// StringBuilder.prototype.padEnd = function (str) {
// return this.value += str;
// }

// StringBuilder.prototype.padStart = function (str) {
    
//     return this.value = str + this.value;
// }

// StringBuilder.prototype.padBoth = function (str) {
//     return this.value = str + this.value + str;
// }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 8

// class Car {};

// 9



// class Car {
// constructor ({ brand, model, price }) {
// this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// }

// 10

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getPrice() {
//   return this.price;
//   }
  
//   changePrice(newPrice) {
//   return this.price = newPrice;
//   }
// }

11

