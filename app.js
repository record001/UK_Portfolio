let nav = document.querySelector(".nav");
let modal = document.querySelector(".modal");
let up = document.querySelector("#up");


window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("purple");
    up.style.opacity = "1"
  } else {
    nav.classList.remove("purple");
    up.style.opacity = "0"

  }
});

// burger
function myFunction(x) {
  x.classList.toggle("change");
  modal.classList.toggle("active");
}

