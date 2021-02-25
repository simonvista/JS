"use strict";
// a = 1;
// console.log(a);
// const obj = { name: "Vue", age: 23 };
/* obj.age = 13;
console.log(obj); */
/* Object.freeze(obj);
obj.age = 33;
console.log(obj); */
// annonymous function
/* let res = function () {
  return new Date();
}; 
console.log(res());*/
// arrow function
/* const res = () => new Date();
console.log(res()); */
/* let myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5])); */
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
// array filter function
let ages = [32, 33, 36.1, 39.1];
console.log(
  ages.filter((x) => Number.isInteger(x) && x > 30 && x < 40).map((x) => x * x)
);
console.log(ages.reduce((a, b) => a + b));
// rest operator
const sum = (...par) => par.reduce((a, b) => a + b);
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
// spread operator
const arr = [1, 2, 3, 4, 5];
let arr_copy = [...arr];
arr[0] = -1;
console.log(arr);
console.log(arr_copy);
// destructuring
const pos = { x: 2.1, y: 7.3, z: 5.2 };
const { x: a, y: b, z: c } = pos;
// string interpolation
console.log(`${a}, ${b}, ${c}`);
const temps = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 74, max: 80 },
};
const {
  tomorrow: { max: tomo_max },
} = temps;
console.log(tomo_max);
const [z, x] = [1, 2, 3, 4, 5];
console.log(z, x); //z=1,x=2
const [z_, ...x_] = [1, 2, 3, 4, 5]; //1,[2,3,4,5]
console.log(z_, x_);
const [z1, x1, , y] = [1, 2, 3, 4, 5]; //1,2,4
console.log(z1, x1, y);
//swap
let a1 = 1,
  b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1, b1);
const [, , ...x2] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(x2);
const stats = {
  max: 60,
  std: 4.3,
  med: 40.1,
  min: 10.1,
  avg: 36,
};
const { max: max_val, min: min_val } = stats;
console.log(min_val, max_val);
//ES6 simple field
const person = (name, age, gender) => ({
  name,
  age,
  gender,
});
console.log(person("Allen", 34, "male"));
const bike = {
  gear: 2,
  //concise declaration function
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
bike.setGear(3);
console.log(bike.gear);
// constructor function before ES6
/* let SpaceShuttle = function (planet) {
  this.planet = planet;
};
let ss=new SpaceShuttle("Mars"); 
console.log(ss.planet);*/
// constructor function applying ES6
class SpaceShuttle {
  constructor(planet) {
    this.planet = planet;
  }
}
let ss = new SpaceShuttle("Mars");
console.log(ss.planet);
function makeClass() {
  class Vegie {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegie;
}
const v1 = makeClass();
const bean = new v1("bean");
console.log(bean.name);
//getter & setter
class Book {
  constructor(author) {
    this._author = author; //"_" means private
  }
  get authorName() {
    return this._author;
  }
  set authorName(author_) {
    this._author = author_;
  }
}
let book = new Book("Wind");
console.log(book.authorName);
book.authorName = "Fall";
console.log(book.authorName);
