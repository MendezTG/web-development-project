/* allows for the html document to load before sending script*/
document.addEventListener("DOMContentLoaded", function () {
    /* gets form element from it's id*/
    const form = document.getElementById("contactForm");

    /* Checks if the form is filled out*/
    if (form) {

        /* adds an event to the form to know when submit is clicked*/
        form.addEventListener("submit", function(event) {
            /* prevents the default form to be submitted*/
            event.preventDefault();
            /* shows message of form being submitted*/
            alert("Thank you for your message, it has been submited.");
        });
    }
});