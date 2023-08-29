let btn89 = document.querySelector(".button-89");
let bongbongImg = document.querySelector(".bongbong-img");

let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");

let btnMess = document.querySelector(".btn-mess");

btn89.addEventListener("click", () => {
  bongbongImg.style.left = "100%";
  bongbongImg.style.transform = "translateX(-100%)";
  setTimeout(() => {
      box1.style.display = "none";
      box2.style.display = 'block';
  }, 2000);
});

btnMess.addEventListener("click", () => {
    box2.style.display = "none";
    box3.style.display = "flex";
    
});
