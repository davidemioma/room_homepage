"use strict";

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".hero");
let i = 0;

function nextSlides() {
  slides[i].classList.add("hidden");
  i = (i + 1) % slides.length;
  slides[i].classList.remove("hidden");
}

function previousSlides() {
  slides[i].classList.add("hidden");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.remove("hidden");
}

previous.addEventListener("click", previousSlides);
next.addEventListener("click", nextSlides);
