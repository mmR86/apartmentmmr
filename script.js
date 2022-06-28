// Testimonials Animation
const cards = document.querySelectorAll(".card-animate");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  cards.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}
