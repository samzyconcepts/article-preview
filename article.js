let shareButton = document.querySelector(".share");
let social = document.querySelector(".pop-up");


shareButton.addEventListener("click", function () {
  // display the pop-up
  social.classList.toggle("show");
  // switch the color
  if (social.classList.contains("show")) {
    this.style.background = "var(--Desaturated-Dark-Blue)";
    this.firstElementChild.style.fill = "#ffffff";
  } else {
    this.style.background = "var(--Light-Grayish-Blue)";
    this.firstElementChild.style.fill = "var(--Very-Dark-Grayish-Blue)";
  }
})