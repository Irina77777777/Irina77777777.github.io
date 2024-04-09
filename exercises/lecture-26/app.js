  // task - 1  -
function calculate(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    } 
    return sum;
}
calculate([1, 2, 4]); // => 7

// sum() - це функція, яка описує операцію додавання.
function sum(numbers) {
    let nn = 0;
    for (const number of numbers) {
         nn = number + nn; 
    }  return nn;  console.log(nn);
}

// multiply() - це функція, яка описує операцію множення.

function multiply(numbers) {
    let nn = 1;
    for (const number of numbers) {
        nn = number * nn;
    }   return nn;
}

function calculate2(type, n, numbers) {
    if (type === "sum") {
            sum(numbers);
        }  else if (type === "multiply") {
            multiply(numbers);
        }
}
calculate2(sum, 1, [1, 2, 4]);
calculate2(multiply, 1, [1, 2, 4]); 

// task - 2 - 
let student_names = ["Wick", "Malcolm", "Smith"];
const st2 = student_names.map(
    (value, index, student_names) => (
        "name :" + value , "index  " + index, "array: [" + student_names
    )
);
console.log(st2);

// task - 3 
​let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
const st3 = students_information.map(({ name, degree , percentage}) => ({
    [name]: degree , percentage:(6000/degree) 
}))  
console.log(st3);

// task -4
const arr =
[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const res = arr.reduce((current) => (res.push(current)));
console.log(res);

// Підказка та пояснення ментора
// sum() - це функція, яка описує операцію додавання.   
//Трохи модифікуємо ваш код:
function sum(numbers) {
let total = 0;
for (const number of numbers) {
total += number;
}
console.log(total); // Перемістився ззовні циклу, щоб він виводив результат після завершення обчислень.
return total; // Перемістився зі стрічки перед console.log(), бо код після return не виконується.
}

// task - 5
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]

Array.prototype.upperCaseCase = function () {
 for (let i = 0; i < this.length; i++) {
 this[i] = this[i].toupperCase();
 }
};
function myFunc() {
 let arr3 = ["Algorithm", "Data Structure", "Operating System", "html"];
 arr3.upperCase();
 console.log(arr3);
}
myFunc();
