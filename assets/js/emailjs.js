
function sendEmail() {
  emailjs.send(
    "homeopathyjourney",
    email_template,
    {
      name: `${document.getElementById("first_name").value} ${document.getElementById("last_name").value}`,
      message: document.getElementById("message").value,
      telephone: document.getElementById("telephone").value,
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
