document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".paraMi");

  const popover = new bootstrap.Popover(boton);

  boton.addEventListener("click", function () {
    popover.toggle();
  });
});
