
function sendEmail() {
  emailjs.send(
    "homeopathyjourney",
    email_template,
    {
      name: document.getElementById("name").value,
      message: document.getElementById("message").value,
      email: document.getElementById("email").value
    },
    "9v9IUYLbFUkJid1pL"
  );
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  sendEmail();
  alert(confirmation_text);
  event.target.reset();
});
