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




// NO LO HE HECHO

// function isValidWalk(walk) {
//   let sameElements = [];
//   //insert brilliant code here
//   for (const element of walk)
    
//   if (element[0] === element) {
//       sameElements.push(element);
      
//       sameElements.length = 5;
//       console.log(sameElements);
//   };
//  if(walk.length === 10 && walk.includes([sameElements])) {
//       return true;
//   }
//    return false;
// };
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));


// const Animals = function ({ name, type, age } = {}) {
//     this.name = name,
//         this.type = type,
//         this.age = age,
//         this.changeName = function (newName){
//         return this.name = newName;
//     }
// };

// const animal = new Animals({ name:'Nemo', type:'cat', age:1 });
// console.log(animal);
// animal.changeName('Mikey');
// console.log(animal);

// Animals.prototype.showInf = function () {
//     console.log(`${this.type}'s name is ${this.name} and he has ${this.age} years old`);
// };

// animal.showInf();

function arrayDiff(a, b) {

   

    for (const number of a) {
 const index = a.indexOf(number);
     
        // console.log(number);
         if (b.includes(number));
       
       
        return a.splice(index,2);
    
    }
    return a;
};
// console.log(arrayDiff([3, 4], [3]));
