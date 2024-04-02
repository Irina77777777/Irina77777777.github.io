const alert = document.querySelector(".alert");
// task - 1
document.getElementsByClassName('.btn-primary').onclick = function () {
     alert.classList.add("alert-primary");
     alert.textContent = "A simple primary alert—check it out!";
};
 
// task - 2
let cli = document.getElementsByClassName(" .btn-secondary");
    cli.addEventListener('click', () => {
    alert.classList.add(" alert-primary");
    alert.textContent = "A simple secondary alert—check it out!";
});

// task - 3
let mouOver = document.getElementsByClassName(".btn-success");
    mouOver.addEventListener('mouseover', () =>  {
    alert.classList.add(" alert-success");
    alert.textContent = "A simple success alert—check it out!";
    });

     mouOver.addEventListener('mouseout ', () =>  {
    alert.classList.remove(" alert-success");
    alert.textContent = "  ";
});

// task - 4
let foc = document.getElementsByClassName(".btn-danger")
foc.addEventListener('focus', () =>  {
    alert.classList.add(" alert-danger");
    alert.textContent = "A simple danger alert—check it out!";
});
foc.addEventListener('focusout', () =>  {
    alert.classList.remove(" alert-danger");
    alert.textContent = "  ";
});

// task - 5
document.getElementsByClassName(".btn-dark  .btn-light") = function toggleMode() {
    alert.classList.add(" alert-danger");
    alert.textContent = "A simple danger alert—check it out!";
};
document.getElementsByClassName(".btn-dark  .btn-light") = function () {
    alert.classList.remove(" alert-danger");
    alert.textContent = "  ";
};

// task - 6
document.getElementsByClassName(".btn-info").keypress = function () {
    btnInfo.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            alert.classList.add('alert-info');
            alert.textContent = "A simple info alert—check it out!";
        }
    });
}


// task - 7
//Знайти на сторінці всі селектори.card.
//Використовуючи цмкл for, вивести на консоль вміст кожного елемента з
//класом.card - title
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
let title = cards[i].querySelector('.card-title').textContent;
console.log(cards[i]);
console.log(title);
}

// task - 8
const allCard= document.querySelectorAll("card");
for (i = 0; i < allCard.length; i++) {
    document.getElementsByClassName('.add-to-cart').onclick = function () {
        console.log(document.getElementsByClassName('.card-title')[i]);
    };
}
