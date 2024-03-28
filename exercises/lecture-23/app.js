const alert = document.querySelector(".alert");
// task - 1
document.getElementsByClassName('btn-primary').onclick = function () {
     alert.classList.add("alert-primary");
     alert.textContent = "A simple primary alert—check it out!";
};
 
// task - 2
document.getElementsByClassName(" btn-secondary").onclick = function () {
    alert.classList.add(" alert-primary");
    alert.textContent = "A simple secondary alert—check it out!";
};

// task - 3
document.getElementsByClassName("btn-success").mouseover = function () {
    alert.classList.add(" alert-success");
    alert.textContent = "A simple success alert—check it out!";
};
document.getElementsByClassName("btn-success").mouseout = function () {
    alert.classList.remove(" alert-success");
    alert.textContent = "  ";
};

// task - 4
document.getElementsByClassName("btn-danger").focus = function () {
    alert.classList.add(" alert-danger");
    alert.textContent = "A simple danger alert—check it out!";
};
document.getElementsByClassName("btn-danger").focusout = function () {
    alert.classList.remove(" alert-danger");
    alert.textContent = "  ";
};

// task - 5
document.getElementsByClassName("btn-dark  btn-light") = function toggleMode() {
    alert.classList.add(" alert-danger");
    alert.textContent = "A simple danger alert—check it out!";
};
document.getElementsByClassName("btn-dark  btn-light") = function () {
    alert.classList.remove(" alert-danger");
    alert.textContent = "  ";
};

// task - 6
document.getElementsByClassName("btn-info").keypress = function () {
    //  event.preventDefault()
    alert.classList.add(" alert-info");
    alert.textContent = "A simple info alert—check it out!";
};
document.getElementsByClassName("btn-info").focusout = function () {
    alert.classList.remove(" alert-danger");
    alert.textContent = "  ";
};

// task - 7
//Знайти на сторінці всі селектори.card.
//Використовуючи цмкл for, вивести на консоль вміст кожного елемента з
//класом.card - title


// task - 8
const allCard= document.querySelectorAll("card");
for (i = 0; i < allCard.length; i++) {
    document.getElementsByClassName('add-to-cart').onclick = function () {
        console.log(document.getElementsByClassName('card-title')[i]);
    };
}
