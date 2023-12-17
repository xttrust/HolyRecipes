let emailSuccess = document.getElementById("email-success");
let emailFail = document.getElementById("email-fail");
let contactForm = document.getElementById("contact-form");
let formHead = document.getElementById("form-header");
console.log(formHead)
console.log(contactForm)

function sendMail(contactForm) {
    emailjs.send("service_y10gf5i", "template_xjhz7bt", {
        "from_name": contactForm.name.value,
        "to_name": "Joanne",
        "user_email": contactForm.emailaddress.value,
        "message": contactForm.content.value,
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
            emailSuccess.classList.remove("hide");
            contactForm.classList.add("hide");
            formHead.classList.add("hide");
        },
        function (error) {
            console.log("ERROR", error);
            emailFail.classList.remove("hide");
            formHead.classList.add("hide");
        }
    ); return false;
}