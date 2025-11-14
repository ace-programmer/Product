const miniImgs = document.querySelectorAll(".product_img-mini");
const images = document.querySelectorAll(".images");
const mainImg = document.getElementById("main_img");

const colors = document.querySelectorAll(".color");

const sizeBtns = document.querySelectorAll(".size__btn");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const count = document.getElementById("count");

miniImgs.forEach((miniImg) => {
  miniImg.addEventListener("click", (images) => {
    mainImg.setAttribute("src", images.target.src);
  });
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    colors.forEach((e) => {
      e.classList.remove("active");
    });

    color.classList.add("active");
  });
});

sizeBtns.forEach((sizeBtn) => {
  sizeBtn.addEventListener("click", () => {
    sizeBtns.forEach((e) => {
      e.classList.remove("select");
    });

    sizeBtn.classList.add("select");
  });
});

let yigindi = 0;
minus.addEventListener("click", () => {
  if (yigindi > 0) {
    yigindi--;
    count.textContent = yigindi
  }
  else{
    alert("Eng kam maxsulot miqdori")
  }
});
plus.addEventListener("click", () => {
  if (yigindi < 10) {
    yigindi++;
    count.textContent = yigindi
  }
  else{
    alert('Maxsulot soni ortib ketyapdi')
  }
});
