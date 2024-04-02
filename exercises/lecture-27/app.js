let ul = document.getElementsByTagName('ul');
let value = localStorage.getItem(items);
const itemsArray = [];
itemsArray.push(value.JSON.parse(value[items]));

function addTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    ul.append(li);
}

itemsArray.forEach(function (addTask) {
     document.body.append("ul");
}) 
 
let input = document.getElementsByTagName('input');
function add(mess) {
    itemsArray.push(document.input.textContent);
    this.set = function (items) {
        localStorage.setItem(items, JSON.stringify(value))
    }
}

function del() {
    localStorage.clear;

    for (let it of itemsArray) {
        itemsArray.shift()
    }

    document.body.ul.innerHTML = "";
}
   
