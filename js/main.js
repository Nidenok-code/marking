let innerBox1 = document.querySelector(".innerBox1");
let innerBox2 = document.querySelector(".innerBox2");
let evaluation = document.querySelectorAll(".number");
let price = document.querySelector(".price");
let btn = document.querySelector("button");
let num = 0;

evaluation.forEach((item, index) => {
  item.addEventListener("click", () => {
    evaluation.forEach((item) => {
      item.classList.remove("isActive");
    });
    for (let i = 0; i <= index; i++) {
      evaluation[i].classList.add("isActive");
    }
    num = index + 1;
    price.innerText = num;
  });
});

btn.addEventListener("click", () => {
  if (num) {
    innerBox1.classList.remove("isActive");
    innerBox2.classList.add("isActive");
  }
});
