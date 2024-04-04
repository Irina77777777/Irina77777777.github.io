
 const errorMessages = document.getElementById("errorMessages");
 function displayError(message) {
     errorMessages.innerHTML += `<div class="error">${message}</div>`;
 }

 function isValidEmail(email) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }

function isValidPassword(password) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
        .test(
        password
    );
}

 checkoutForm.addEventListener("submit", function (event) {
     event.preventDefault();

     const { name, email, password } =
         checkoutForm.elements;

     errorMessages.innerHTML = "";
     if (!name.value.trim()) {
         displayError("Name field is required.");
         return;
     }
   
     if (!email.value.trim() || !isValidEmail(email.value)) {
         displayError("Please enter a valid email address.");
         return;
     }
     
     if (!password.value.trim() || !isValidPassword(password.value)) {
         displayError("Please enter a valid password");
         return;
     }
 });

 form = document.body.append("#registrationForm");
 form.submit();













//  pasword    /(?=^[a-zA-Z\d]{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/