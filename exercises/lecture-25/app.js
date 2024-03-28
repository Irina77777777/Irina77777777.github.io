const list = ["html", "css", "javascript", "react.js"];
 
// task - 1
let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.textContent = 'html';
let li2 = document.createElement("li");
li2.textContent = 'css';
let li3 = document.createElement("li");
li3.textContent = 'javascript';
let li4 = document.createElement("li");
li4.textContent = 'react.js';
document.body.appendChild(ul);
document.body.appendChild(li1);
document.body.appendChild(li2);
document.body.appendChild(li3);
document.body.appendChild(li4);

// task - 2
const listWithHref = [
    { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { "react.js": "https://react.dev" },
];
let ul2 = document.createElement("ul");
let a1 = document.createElement("a");
a1.textContent = `  {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}`;
let br1 = document.createElement('br');
let a2 = document.createElement("a");
a2.textContent = ` {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}`;
let br2 = document.createElement("br");
let a3 = document.createElement("a");
a3.textContent = `  {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}`;
let br3 = document.createElement("br");
let a4 = document.createElement("a");
a4.textContent = ` {'react.js': "https://react.dev"}`;
document.body.appendChild(ul2);
document.body.appendChild(br1);
document.body.appendChild(a1);
document.body.appendChild(br2);
document.body.appendChild(a2);
document.body.appendChild(br1);
document.body.appendChild(a3);
document.body.appendChild(br3);
document.body.appendChild(a4);

// task - 4



if ("content" in document.createElement("template")) {
const tbody = document.querySelector("tbody");
const template = document.querySelector("#study");
const clone = template.content.cloneNode(true);
let td = clone.querySelectorAll("td");
    td[0].textContent = "Tom";
    td[1].textContent = "Cat";
    td[2].textContent = '230';
 tbody.appendChild(clone);
const clone2 = template.content.cloneNode(true);
 td = clone2.querySelectorAll("td");
 td[0].textContent = "Mary";
    td[1].textContent = "Ann";
   td[2].textContent = "336";
    tbody.appendChild(clone2);
    const clone3 = template.content.cloneNode(true);
    td = clone3.querySelectorAll("td");
    td[0].textContent = "John";
    td[1].textContent = "Doe";
    td[2].textContent = "400";
    tbody.appendChild(clone3);
     const clone4 = template.content.cloneNode(true);
     td = clone4.querySelectorAll("td");
     td[0].textContent = "James";
     td[1].textContent = "Bond";
     td[2].textContent = "700";
     tbody.appendChild(clone4);
}
