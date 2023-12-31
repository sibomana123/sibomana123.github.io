let MenuBtn = document.querySelector("#MenuBtn");
let Header = document.querySelector("header");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Header.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Header.classList.remove("active");
};

// For The Cursor
let Cursor1 = document.querySelector(".Cursor1");
let Cursor2 = document.querySelector(".Cursor2");


// When We Hover on Link Then
document.querySelectorAll("a").forEach((Link) => {
  Link.onmouseenter = () => {
    Cursor1.classList.add("active");
    Cursor2.classList.add("active");
  };
  Link.onmouseleave = () => {
    Cursor1.classList.remove("active");
    Cursor2.classList.remove("active");
  };
});

// Theme Toggle
let ThemeToggle = document.querySelector(".ThemeToggle");
let toggleBtn = document.querySelector(".toggleBtn");


// Main Logic
document.querySelectorAll(".ThemeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});