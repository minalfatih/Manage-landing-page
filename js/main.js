//
document.querySelector(".navbar-toggler").onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    document.querySelector("main").classList.add("active");
  } else {
    document.querySelector("main").classList.remove("active");
  }
};

let about = document.getElementById("about");

window.onscroll = function () {
  let win = this.innerHeight; // 854
  let winScroll = this.scrollY; // 453
  let aboutTop = about.offsetTop; // 742
  let aboutHeight = about.offsetHeight; // 566
  console.log(winScroll > aboutTop + aboutHeight - win);
};

let box = document.querySelector("form .box");
let input = document.querySelector(".box .text");
let errorText = document.createElement("p");
box.appendChild(errorText);
errorText.className = "error-text";

document.forms[0].onsubmit = (e) => {
  let regex = /\w+@[a-z]+\.[a-z]{2,}/gi;
  if (regex.test(input.value)) {
    input.classList.remove("error-active");
    errorText.textContent = "";
  } else {
    input.classList.add("error-active");
    errorText.textContent = "please insert a valid email";
    errorText.style.color = "rgb(255 62 49)";
  }
  e.preventDefault();
};
