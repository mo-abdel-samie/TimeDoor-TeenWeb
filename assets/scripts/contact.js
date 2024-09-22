var contactForm = document.getElementById("contactForm"),
  inputName = document.querySelector("input[name='name']"),
  myName = document.querySelector("#myName");

// contactForm.onmouseover = () => {
//     contactForm.style.background = "red"
// };

contactForm.addEventListener("dblclick", () => {
  contactForm.style.background = "#e8e8e8";
});

contactForm.onmouseout = () => {
  contactForm.style.background = "white";
};

inputName.onkeydown = () => {
  myName.innerHTML = inputName.value;
};