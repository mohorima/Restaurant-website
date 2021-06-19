//sticky header
const header = document.querySelector("header");
const sectionOne = document.querySelector(".section-one");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// reponsive navigation

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  navList.classList.toggle("fadeIn");
  header.classList.toggle("nav-transparentbg");
});

// SWIPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// change background on option hover

const optBg = document.querySelector(".option-image");
const opt = document.querySelectorAll(".option");

opt.forEach((el) => {
  el.addEventListener("mouseover", () => {
    let bg = el.getAttribute("data-bg");
    optBg.style.background = `linear-gradient(
      180deg,
      rgba(100, 80, 50, 0.6) 0%,
      rgba(49, 35, 19, 0.6) 85.21%
    ), url(${bg}) no-repeat center /cover`;
    optBg.style.opacity = `1`;
  });

  el.addEventListener("mouseout", () => {
    optBg.style.opacity = `0`;
  });
});

//mouse move

document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 220;
    var y = (e.clientY * moving_value) / 220;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

///gsap

gsap.registerPlugin(ScrollTrigger);

gsap.from(".layer1", {
  opacity: 0,
  scale: 0.6,
  duration: 3,
  ease: "back.out(1.7)",
  delay: 0.5,
  scrub: true,
});

gsap.from(".layer2", {
  opacity: 0.8,
  scale: 0.8,
  duration: 1.5,
});

gsap.from(".text-0", {
  opacity: 0.7,
  y: -50,
  duration: 2.5,
});
gsap.from(".main-sub-title", {
  opacity: 0.3,
  color: "#5c4b32",
  duration: 2,
});

gsap.from(".slideimg", {
  x: -300,
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".slideimg",
    start: "top bottom",
  },
});
gsap.from(".slideimg2", {
  x: 300,
  y: 50,
  duration: 2.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".slideimg",
    start: "top bottom",
  },
});

gsap.utils.toArray(".img-right").forEach((img) => {
  gsap.from(img, {
    x: 400,
    y: 90,
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "top 170px",
      scrub: 2,
    },
  });
});

gsap.utils.toArray(".img-left").forEach((img) => {
  gsap.from(img, {
    x: -400,
    y: -90,
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "top 120px",
      scrub: 2,
    },
  });
});

gsap.utils.toArray(".text-1").forEach((text) => {
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 50rem)": function () {
      gsap.from(text, {
        y: 400,
        opacity: 0.4,
        duration: 1.5,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top center",
        },
      });
    },

    // mobile
    "(max-width: 50rem)": function () {
      gsap.from(text, {
        x: -300,
        opacity: 0.4,
        duration: 1.5,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top center",
        },
      });
    },
  });
});

gsap.utils.toArray(".text-2").forEach((text) => {
  gsap.from(text, {
    x: -300,
    opacity: 0.3,
    duration: 1.5,
    scrollTrigger: {
      trigger: text,
      start: "top bottom",
      end: "top center",
    },
  });
});

gsap.from(".fade-in", {
  opacity: 0.2,
  duration: 2,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top bottom",
  },
});

gsap.from(".fade-in-sm", {
  opacity: 0,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".fade-in-sm",
    start: "top bottom-=200",
  },
});

gsap.from(".img-sm", {
  scale: 0.5,
  opacity: 0.5,
  duration: 1.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".img-sm",
    start: "top bottom-=50px",
  },
});
