const classes = ["first", "second", "third", "fourth"];

   // task - 1
   let hh1 = document.getElementsByTagName('h1');
    console.log("h1", hh1);
console.dir(hh1);
console.log(hh1.nodeType);
    for (i = 0; i < hh1.length; i++) {
        console.log(hh1[i]);
}
    
// task -2
    let elem = document.querySelector('p');
console.log(elem);
elem.style.backgroundColor = 'gold';

// task - 3
let elem2 = document.querySelector('#p2');
elem2.style.backgroundColor = 'gold';
elem2.style.color = 'blue';
elem2.style.fontSize = '2rem';

// task - 4
let elem3 = document.querySelector('p3');
elem3.className = 'third';

// task - 5
let elem4 = document.querySelector("p4");
elem4.className = 'fourth border';

//task - 6
const farClass = document.getElementsByClassName("container");
console.log("Class:  ", farClass);
for (const child of farClass) {
    console.log( document.farClass.firstElementChild );
}

// task - 7
    for (const child of farClass) {
          console.log( document.farClass.firstElementChild.textContent );
    }

//task - 8
let headers = document.querySelectorAll('.container header');
for (i = 2; i < headers.length; i++) {
     headers[i].setAttribute("nameTage", "h[i]");
}
//const classes = ["first", "second", "third", "fourth"];
for (i = 0; i < headers.length; i++) {
     headers[i].classList.add(classes[i]);
}


  