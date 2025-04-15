// 1. Select the slider element and both buttons

// 2. Set up a variable to track the current index (initially 0)

// 3. Count how many slides there are (use slider.children.length) = 3

// 4. Write a function to update the slider's position

//(hint use modulo %)
// 5. Add an event listener to the "Next" button
//    - Increase currentIndex by 1
//    - If currentIndex >= totalSlides, reset to 0
//

// 6. Add an event listener to the "Previous" button
//    - Decrease currentIndex by 1
//    - If currentIndex < 0, set to totalSlides - 1
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});
