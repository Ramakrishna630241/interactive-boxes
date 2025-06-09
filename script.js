const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("active");
      }
    });
    box.classList.toggle("active");
  });
});
