const btns = document.querySelectorAll(".button");
const groups = document.querySelectorAll(".group");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentBtn = document.querySelector(".button.active");
    currentBtn.classList.remove("active");
    btn.classList.add("active");

    const currentGroup = document.querySelector(".group.show");
    currentGroup.classList.remove("show");
    const selectedGroup = document.querySelector(`.group.${btn.classList[1]}`);
    selectedGroup.classList.add("show");
  });
});

const btns1 = document.querySelectorAll(".button1");
const groups1 = document.querySelectorAll(".group1");

btns1.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentBtn = document.querySelector(".button1.active");
    currentBtn.classList.remove("active");
    btn.classList.add("active");

    const currentGroup = document.querySelector(".group1.show");
    currentGroup.classList.remove("show");
    const selectedGroup = document.querySelector(`.group1.${btn.classList[1]}`);
    selectedGroup.classList.add("show");
  });
});
