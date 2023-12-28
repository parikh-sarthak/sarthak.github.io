document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const xhr = new XMLHttpRequest();
    // const url = "https://formspree.io/sarthakparikh@yahoo.com"; // Replace with your Formspree email
    const url = "https://formspree.io/f/mnqeaela";
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert("Form submitted successfully!");
          contactForm.reset();
        } else {
          alert("There was an error submitting the form. Please try again.");
        }
      }
    };

    xhr.send(formData);
  });
});
