"use strict";

this.addEventListener("DOMContentLoaded", () => {
  // Modal
  let modal = document.querySelector(".modal");
  let modalCloseBtn = document.querySelector("[data-close]");
  let modalOpenBtn = document.querySelector("[data-open]");
  let body = document.querySelector("body");

  function openModal() {
    modal.classList.add("active");
    body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    body.style.overflow = "";
  }

  setTimeout(() => {
    openModal();
  }, 1000);

  modalCloseBtn.addEventListener("click", () => {
    closeModal();
  });

  modalOpenBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });

  this.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      closeModal();
    }
  });

  // Cursor

  let cursor = document.querySelector("#cursor");
  this.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

  // Navigation
  let navigation = document.querySelector(".navigation");
  let faBars = document.querySelector(".fa-bars");
  let faTimes = document.querySelector(".navigation .fa-times");
  let navigationLinks = document.querySelectorAll(".navgation__list_item-link");

  faBars.addEventListener("click", () => {
    navigation.classList.add("active");
    body.style.overflow = "hidden";
  });

  faTimes.addEventListener("click", () => {
    navigation.classList.remove("active");
    body.style.overflow = "";
  });

  for (let navigationLink of navigationLinks) {
    navigationLink.addEventListener("click", () => {
      navigation.classList.remove("active");
      body.style.overflow = "";
    });
  }

  this.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
      navigation.classList.remove("active");
      body.style.overflow = "";
    }
  });
});
