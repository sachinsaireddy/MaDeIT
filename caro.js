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
    } else {
      sli.style.transform = `translateX(${
        (len - curr_slide + indx) * 40 - 10
      }vw)`;
      sli.style.opacity = "0.2";
    }

    if (indx === (curr_slide + 1) % len) {
      sli.style.transform = sli.style.transform + ` scale(1.2)`;
      sli.style.opacity = "1";
    }
  });
  curr_slide = (curr_slide + 1) % len;
}, 5000);
