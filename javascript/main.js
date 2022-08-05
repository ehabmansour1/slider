let images = document.querySelectorAll(".slider .list li");
let right = document.querySelector(".fa-angle-right");
let left = document.querySelector(".fa-angle-left");
let indictor = document.querySelector(".indictor");

for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  if (i === 0) {
    div.innerHTML = `<span></span><span>1</span>`;
    div.classList.add("active");
  } else {
    div.innerHTML = `<span></span><span>${i + 1}</span>`;
  }
  indictor.appendChild(div);
}
let indictorChilds = document.querySelectorAll(".indictor div");
let counter = 0;
right.onclick = plus;
left.onclick = minus;
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "39") {
    plus();
  } else if (e.keyCode == "37") {
    minus();
  }
}

function plus() {
  if (counter < images.length - 1) {
    images.forEach((e) => {
      e.classList.remove("active");
    });
    counter++;
    images[counter].classList.add("active");
    indictorChilds.forEach((e) => {
      e.classList.remove("active");
    });
    indictorChilds[counter].classList.add("active");
  }
}
function minus() {
  if (!counter <= 0) {
    images.forEach((e) => {
      e.classList.remove("active");
    });
    counter--;
    images[counter].classList.add("active");
    indictorChilds.forEach((e) => {
      e.classList.remove("active");
    });
    indictorChilds[counter].classList.add("active");
  }
}
