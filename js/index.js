const arr = [
  "apple",
  "mango",
  "mango",
  "mango",
  "blueberry",
  "blueberry",
  "banana",
];

function getFruits(arr) {
  const fruits = {};

  arr.forEach((fruit) => {
    if (fruits[fruit]) {
      fruits[fruit] += 1;
    } else {
      fruits[fruit] = 1;
    }
  });

  return fruits;
}

// console.log(getFruits(arr));

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age), (Person.personCount += 1);
  }

  static personCount = 0;

  static getPersonCount() {
    return Person.personCount;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  setName(newName) {
    return (this.name = newName);
  }
}

// const Sara = new Person("Sara", 28);

// const Ivanka = new Person("Ivanka", 30);

// const Yana = new Person("Yana", 18);

// console.log(Person.personCount);
// console.log(Person.getPersonCount());

// THIS

const bob = {
  name: "Bob",
  showData() {
    Object.keys(bob).map(() => {
      console.log(this);
    }); //ссылаеться на обьект

    //  Object.keys(bob).map(function() {
    //    console.log(this);
    //  }); this  будет ссылаться на window
  },
};

// console.log(bob.showData()); // obj bob потому что обьявлена в момент вызова showData в конт obj

// const sara = {
//   name: "Sara",
//   showData: bob.showData,
// };
// console.log(sara.showData());

const fruits = [
  "apple",
  "mango",
  "mango",
  "mango",
  "blueberry",
  "blueberry",
  "banana",
];

const iterator = fruits[Symbol.iterator]();

// console.log(iterator.next());

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
