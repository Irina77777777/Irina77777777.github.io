const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

setTimeout(Func, 10000);
function Func() {
    const firstName = form.elements.firstName;
    const lastName = form.elements.lastName;
    if (firstName === '' && lastName === '') {
        document.getElementById("waiting").textContent = " I'm miss You. ";
    } else 
        document,
            (getElementById("waiting").textContent =
                "Hello  " + `${ firstName }` +  `${ lastName }`  + " ! ");
}

let xhr = new XMLHttpRequest();
 const url = "https://jsonplaceholder.typicode.com/posts";
xhr.open("GET", url, true);
 xhr.responseType = "json";
xhr.send();
 
xhr.onload = function () {
   // let template = document.querySelector("demo");
    document.getElementById("demo").innerHTML = JSON.parse(xhr.responseText);
};

