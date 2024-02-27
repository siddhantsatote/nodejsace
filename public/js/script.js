const slider = document.getElementById('slider');
let rotateYValue = 0;

function rotateSlider(direction) {
    rotateYValue += direction * 60;
    slider.style.transform = `perspective(1000px) rotateY(${rotateYValue}deg)`;
}

setInterval(() => {
    rotateSlider(-1); // Auto-rotate to the right every 3 seconds
}, 3000);


const images = document.getElementById("images");

const imagesList = document.querySelectorAll("#images img");
let index = 0;

const changeImage = () => {
    if (index > imagesList.length - 1) index = 0;
    else if (index < 0) index = imagesList.length - 1;
    images.style.transform = `translateX(${-index * 500}px)`;
};

const run = () => {
    index++;
    changeImage();
};

const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(run, 2000);
};

let interval = setInterval(run, 2000);


