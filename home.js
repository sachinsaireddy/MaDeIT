// ======== Slide Out =======
document.getElementById("hand").addEventListener("click", function () {
  document.getElementById("sticky-button").classList.toggle("active");
});
// ==========================

// ======== Hero Banner Carousel ========
const slides = document.getElementsByClassName("carousel-item");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

setInterval(() => {
  hideAllSlides();
  if (position === numberOfSlides - 1) {
    position = 0;
  } else {
    position++;
  }
  slides[position].classList.add("carousel-item-visible");
}, 5000);
// ======================================

// ======= About US ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("trans-right");
    }
  });
});

const aboutiiit = document.querySelector(".about-iiit");
observer.observe(aboutiiit);

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("trans-left");
    }
  });
});
const aboutmadeit = document.querySelector(".about-madeit");
observer2.observe(aboutmadeit);
// =======================

// ====== Impact =======
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("metric-show");

      let counterElement = entry.target.querySelector("#counter");
      let countTo = parseInt(counterElement.getAttribute("data-count-to"));
      counterElement.innerHTML = 0;
      setTimeout(function () {
        let count = 0;
        let timer = setInterval(function () {
          let temp = countTo - count;
          if (0 < temp && temp <= 30) count++;
          else if (30 < temp && temp <= 100) count += 10;
          else if (100 < temp && temp <= 1000) count += 100;
          else if (1000 < temp && temp <= 10000) count += 1000;
          else if (10000 < temp && temp <= 100000) count += 10000;
          else if (1000000 < temp && temp <= 1000000) count += 100000;
          else count += 1000000;

          counterElement.innerHTML = count;
          if (count === countTo) {
            clearInterval(timer);
          }
        }, 50);
      }, 1000);
    }
  });
});

const impacts = document.querySelectorAll(".metric");
impacts.forEach((el) => observer3.observe(el));
// ==========================

// ===== testmonials ========
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
// ========================
