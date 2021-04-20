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