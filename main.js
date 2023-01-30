const bg = document.querySelector(".background-image");
const hero = document.querySelector(".hero");
const windowWidth = window.innerWidth / 2;
const windowHeight = window.innerHeight / 2;
const categoryitem = document.querySelectorAll(".category-item");
const menuitem = document.querySelectorAll(".menu-item");

hero.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

function toggle() {
  var recipe = document.querySelector(".recipe");
  recipe.classList.toggle("active");
  var video = document.querySelector("video");
  video.currentTime = 0;
}

const changeactiveitems = () => {
  categoryitem.forEach((item) => {
    item.classList.remove("active");
  });
};
categoryitem.forEach((item) => {
  item.addEventListener("click", () => {
    changeactiveitems();
    item.classList.add("active");
  });
});
const changeactiveitem = () => {
  menuitem.forEach((item) => {
    item.classList.remove("active");
  });
};
menuitem.forEach((item) => {
  item.addEventListener("click", () => {
    changeactiveitem();
    item.classList.add("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    loop: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function SendMail() {
  var params = {
    email_id : document.getElementById("email_id").value
  }
  emailjs.send("service_5b4focc", "template_mmwhg3s", params).then
  (function(res){
      document.getElementById('alert').style.display = 'block';
      setTimeout(function(){document.getElementById('alert').style.display = 'none'}, 1700);
  })
}