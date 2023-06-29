
let menu = document.querySelector(".menu");
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", function () {
  menu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.querySelector(".deliver-text h1").style.display = "none";
});

closeMenu.addEventListener("click", function () {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  document.querySelector(".deliver-text h1").style.display = "block";
});