// ======== Slide Out =======
document.getElementById("hand").addEventListener("click", function () {
  // Toggle the "active" class of the #sticky-button element
  document.getElementById("sticky-button").classList.toggle("active");
});

// ======== Hero Banner Carousel ========
const slides = document.getElementsByClassName("carousel-item");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  // remove all slides not currently being viewed
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

setInterval(() => {
  hideAllSlides();
  // check if last slide has been reached
  if (position === numberOfSlides - 1) {
    position = 0; // go back to first slide
  } else {
    // move to next slide
    position++;
  }
  // make current slide visible
  slides[position].classList.add("carousel-item-visible");
}, 5000);

// ====== Impact =======
let counterElements = document.querySelectorAll("#counter");

counterElements.forEach((counterElement) => {
  // Get the value to count to from the data-count-to attribute of the element
  let countTo = parseInt(counterElement.getAttribute("data-count-to"));

  // Set the initial count to zero
  let count = 0;
  let timer = setInterval(function () {
    let temp = countTo - count;
    if (0 < temp && temp <= 10) count++;
    else if (10 < temp && temp <= 100) count += 10;
    else if (100 < temp && temp <= 1000) count += 100;
    else if (1000 < temp && temp <= 10000) count += 1000;
    else if (10000 < temp && temp <= 100000) count += 10000;
    else if (1000000 < temp && temp <= 1000000) count += 100000;
    else count += 1000000;

    // Update the text of the counter element to display the current count
    counterElement.innerHTML = count;
    console.log(countTo);
    // If the count has reached the target value, stop the timer
    if (count === countTo) {
      clearInterval(timer);
    }
  }, 50);
});

const sli = document.querySelectorAll(".sli");
const len = sli.length;
sli.forEach((sli, indx) => {
  sli.style.transform = `translateX(${indx * 40 - 10}vw)`;
});

let curr_slide = 0;
setInterval(() => {
  sli.forEach((sli, indx) => {
    if (indx >= curr_slide) {
      sli.style.transform = `translateX(${(indx - curr_slide) * 40 - 10}vw)`;
      sli.style.opacity = "0.2";
      sli.style.backgroundColor = "";
    } else {
      sli.style.transform = `translateX(${
        (len - curr_slide + indx) * 40 - 10
      }vw)`;
      sli.style.opacity = "0.2";
      sli.style.backgroundColor = "";
    }

    if (indx === (curr_slide + 1) % len) {
      sli.style.transform = sli.style.transform + ` scale(1.2)`;
      sli.style.opacity = "1";
      sli.style.backgroundColor = "rgba(20, 167, 157)";
    }
  });
  curr_slide = (curr_slide + 1) % len;
}, 5000);
