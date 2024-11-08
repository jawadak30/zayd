
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});


const productSwiper = new Swiper('.productSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        425: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});


let targetReached = false; // Flag to avoid re-running the counter
    const counterElement = document.getElementById("counter");
    const targetScrollHeight = 300; // Set the height at which counting starts

    // Function to animate the counter from 0 to 100
    function animateCounter() {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
        if (count === 100) clearInterval(interval);
      }, 10); // Adjust speed by changing interval duration
    }

    // Event listener for scrolling
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

    if (scrollTop >= targetScrollHeight && !targetReached) {
        targetReached = true; // Prevents re-triggering
        animateCounter();
    }
});
    

let target= false; // Flag to avoid re-running the counter
    // const counter1 = document.getElementById("counter1");
    const targetHeight = 300; // Set the height at which counting starts
    let counter1 = document.getElementById('counter1');

    // Function to animate the counter from 0 to 100
    function Counter() {
    let count1 = 0;
    const interval = setInterval(() => {
        count1++;
        counter1.textContent = count1;
        if (count1 === 20) clearInterval(interval);
      }, 30); // Adjust speed by changing interval duration
    }

    // Event listener for scrolling
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

    if (scrollTop >= targetHeight && !target) {
        target = true; // Prevents re-triggering
        Counter();
    }
});