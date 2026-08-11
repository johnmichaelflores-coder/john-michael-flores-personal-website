document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      message.classList.remove("d-none", "alert-danger");
      message.classList.add("alert-success");
      message.textContent = "Thank you! Your message has been received for this demo form.";
      form.reset();
    });
  }
});
