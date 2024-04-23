let hamBurgerDiv = document.getElementById("nav-hamburger-div");
let hamBurgerIcon = document.getElementById("nav-hamburger-icon");
let extraNavbar = document.getElementById("extra-navbar");
let hamBurgerClicked = false;

hamBurgerDiv.addEventListener("click", () => {
  if (!hamBurgerClicked) {
    hamBurgerIcon.classList.remove("fa-bars");
    hamBurgerIcon.classList.add("fa-x");
    extraNavbar.classList.remove("hide-me");
    extraNavbar.classList.add("show-me");
  } else {
    hamBurgerIcon.classList.remove("fa-x");
    hamBurgerIcon.classList.add("fa-bars");
    extraNavbar.classList.remove("show-me");
    extraNavbar.classList.add("hide-me");
  }
  hamBurgerClicked = !hamBurgerClicked;
});
