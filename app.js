const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let activeIndex = Math.floor(slides.length / 2);

function updateSlideTransforms() {
    slides.forEach((slide, index) => {
        const diff = index - activeIndex;
        slide.classList.remove("active");

        if (diff < 0) {
            slide.style.transform = `rotate(${diff * 5}deg)
            translateY(${Math.abs(diff) * 50}px)
            translateX(${diff * 100}%)`;
            slide.style.zIndex = diff;
        } else if (diff > 0) {
            slide.style.transform = `rotate(${diff * 5}deg)
            translateY(${Math.abs(diff) * 50}px)
            translateX(${diff * 100}%)`;
            slide.style.zIndex = -diff;
        } else {
            slide.style.transform = "rotate(0deg) translateY(0) translateX(0)";
            slide.style.zIndex = 0;
            slide.classList.add("active");
        }
    });

    prevButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === slides.length -1;
    prevButton.style.opacity = prevButton.disabled ? "0.1" : "1";
    nextButton.style.opacity = nextButton.disabled ? "0.1" : "1";
}

function prevSlide() {
    activeIndex = (activeIndex -1 + slides.length) % slides.length;
    updateSlideTransforms();
}

function nextSlide() {
    activeIndex = (activeIndex + 1) % slides.length;
    updateSlideTransforms();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

updateSlideTransforms();



let scrollTimeout;

function handleMousewheel(event) {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }, 400);
}

window.addEventListener("wheel", handleMousewheel);

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true
  })