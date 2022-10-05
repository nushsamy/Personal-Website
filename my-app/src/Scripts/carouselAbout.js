
const buttons = document.querySelectorAll("[carousel-button-about]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("hello")
    const offset = button.dataset.carouselButton === "right" ? 1 : -1
    const slides = button
      .closest("[data-carousel-about]")
      .querySelector("[data-slides-about]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    
  })
})