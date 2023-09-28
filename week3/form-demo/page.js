const contactUsScreen = document.querySelector("[contact-us-template]");
const homeScreen = document.querySelector("[home-template]");

const homeLink = document.getElementById("nav-home");
const contactUsLink = document.getElementById("nav-contact-us");

const links = [homeLink, contactUsLink];
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.target.id === "nav-home") {
      homeScreen.style.display = "flex";
      contactUsScreen.style.display = "none";
    } else if (event.target.id === "nav-contact-us") {
      homeScreen.style.display = "none";
      contactUsScreen.style.display = "flex";
    }
  });
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(Object.fromEntries(formData));
});
