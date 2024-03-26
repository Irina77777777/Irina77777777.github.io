// Масив кольорів складається з 3 елементів.
const colors = ["blue", "green", "white"];

// task -1
 function iter(item) {
     console.log(item);
 }
colors.forEach(iter);

// task  - 2
function iterate(item, index) {
    console.log(`${item }` + '   has  index   '+  `${ index }`);
}
colors.forEach(iterate);

// task - 2 -1 
function iterate2(item, index) {
    if (index === iterate2.length) {
        console.log('The last iteration!');
    } else   console.log(`${item}` + "   has  index   " + `${index}`);
}
colors.forEach(iterate2);

// task - 3
const letters = ["a", "b", "c"];
function iterate3(letter) {
    console.log(this === window);
}
letters.forEach(iterate3);

// task - 4
const Numbers = [22, 3, 4, 10];
let allEven = true;
 Numbers.forEach(function (number) {
     if (number % 2 === 1) {
         allEven = false;
     }
 });
console.log(allEven);
 
// task - 5
 allEven = Numbers.every(function(number) {
 return number % 2 === 0;
 });
console.log(allEven); 
 
// task - 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index); 

// task - 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find((element) => element > 10);
console.log(found);

// task - 8
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); 

// task - 9
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(function(a, b) {
return a - b;
});

console.log(numbers);
