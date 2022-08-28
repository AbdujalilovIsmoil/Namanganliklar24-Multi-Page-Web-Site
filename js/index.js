"use strict";

this.addEventListener("DOMContentLoaded", () => {
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
});
