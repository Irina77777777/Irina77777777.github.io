// task 1


let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
console.log(str1.length);  // 13
console.log(str2.length);  // 13
if (str1.length === str2.length)
    console.log("strings are equal"); //  strings are equal
else console.log("strings are  not equal");
if (str1.length == str2.length)
    console.log("str-s are equal"); //  str-s are equal
else console.log("str-ss are  not equal");

// task - 2
let string5 = "Hello World";
console.log(string5[0]); 
console.log(string5.charAt(0));

// task - 3
// повернути символ J рядка:
let str3 = "Hello Javascript";
console.log(str3.indexOf("J"));

// task - 4
// Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3[str3.length - 1]);
console.log(str3.charAt(str3.length - 1));

// task - 5
function lastChar(str3) {
    console.log(str3[str3.length - 1]);
    console.log(str3.charAt(str3.length - 1));
    let en = str3.length - 1;
    console.log(str3[en]);
} 
lastChar(str3);

// task - 6

let a = "When candles are out,";
let b = "all cats are grey.";
//Використовуючи метод concat, вивести на консоль:
//When candles are out, all cats are grey
let cc = a.concat(b); 
console.log(cc);

// task 7
let fact = "Fifteen is the same as";
let a7 = 5;
let b7 = 10;
//  fact та вивести його на консоль, щоб результат виглядав так:
//Fifteen is the same as 15
a7 = a7 + b7;
console.log(fact + " " + a7);

// task 8
let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName, lastName) {
    console.log(firstName + "  " + lastName);
}   
getFullName(firstName, lastName);

// task 9
function greeting(getFullName) {
     return ("Hello, " + getFullName(firstName, lastName) + " !");
} 
greeting(getFullName);

// task 10
function greeting() {
    "<div>" + 
        "<h1>Hello, Tom Cat!</h1>" + 
    "</div>";
}

// task 11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
console.log(string1.trim());  // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
console.log(phoneNumber); // => '555-123'
phoneNumber1 = `'555-123\\n '`; 
console.log(phoneNumber1);// => '555-123 \n'

// task 12
let sentence = "Always look on the bright side of life";
console.log(sentence.includes("look up"));
console.log(sentence.includes('look on'));
console.log(sentence.includes("look on"[fromIndex = 6]));  // true
console.log(sentence.includes("look on"[(fromIndex = 7)])); // false  8-1=7

// task 13
let sentence13 = "Always look on the bright side of life";
console.log(sentence13.indexOf("l"));
console.log(sentence13.indexOf("l"[fromIndex = 2]));
console.log(sentence13.indexOf("L"));

// task 14
let sentence14 = "Always look on the bright side of life";
console.log(sentence14.slice(6, sentence14.length));
console.log(sentence14.slice(0, 6));// Always
console.log(sentence14.slice(7, 11));  // look

// task 15 
/*const nameP = /^\([0-9][a-z]-_){8,16}$;
// task 16
const mailPatt = /^\ (([0-9][a-z]){0,}+\ @\+ ([a-z]{0,})+\.\+([a-z]))$; */

// task 17
let sentence17 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText(sentence17) {
    console.log(sentence17.substring(0, 50));
    console.log(sentence17.substr(0, 50));
} 
truncateText(sentence17);






