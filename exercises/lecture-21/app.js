// task 1
const fruitsS = "apple banana cantaloupe blueberries grapefruit";
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// task - 2
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// task - 3
let m = 0;
while (m < fruits.length) {
    console.log(fruits[m]);
    m++;
}

// task - 4
let n = 0;
do {
    n++;
    console.log(fruits[n]);
} while (m < fruits.length); 

// task - 5
for (const fruit of fruits) {
    console.log(fruit);
}

// task - 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let l = 0; l < Numbs.length; l++) {
    if (l = Numbs.length % 2 == 0)
        console.log(Numbs[l]);
}

// task - 7
const names = ["Batman"];
names.push("Joker");
console.log(names);

// task - 8
const names8 = ["Batman"];
names8.unshift('Joker');
console.log(names8);

// task - 9
names = ["Batman", "Joker", "Bane"];
names.unshift("Catwoman");
console.log(names);

// task - 10
names = ["Batman", "Joker", "Bane"];
names.unshift("Catwoman");
console.log(names);

// task - 11
names = ["Batman", "Joker", "Bane"];
names[1] = "Catwoman";
console.log(names);

// task - 12
const names4 = ["Batman", "Catwoman", "Joker", "Bane"];
for (let i = 0; i < names4.length; i++) {
    if (names4[i] === "Catwoman" || names4[i] === "Joker") {
        delete names4[i];
    }
}
console.log(names);
//  or  task - 12
let num = 0;
num = names4.indexOf('Catwoman');
delete names4[num];
console.log(names4);
num = names4.indexOf("Joker");
delete names4[num];
console.log(names4);

// task - 13
const names = ["Batman", "Catwoman", "Joker", "Bane"];
for (let i = 0; i < names.length; i++) {
    if (names[i] === "Catwoman" || names[i] === "Joker") {
        names[i] = "Alfred"; 
    }
}
console.log(names);

// task - 14
const names = ["Batman", "Catwoman", "Joker", "Bane"];
for (let i = 0; i < names.length; i++) {
    if (names.includes('Alfred') === false) {
        names.push("Alfred");
    }
}
console.log(names);
 
// task - 15
const names = ["Batman", "Catwoman", "Joker", "Bane"];
for (let i = 0; i < names.length; i++) {
    if (names.includes("Alfred") === true) {
        delete names[i];
    }
}
console.log(names);

