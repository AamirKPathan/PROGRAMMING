const images = [
    {
        src: "hawkerHurricane.jpg",
        caption: "Hawker Hurricane – A rugged British fighter that formed the backbone of the RAF during the Battle of Britain."
    },
    {
        src: "spitfire.jpg",
        caption: "Supermarine Spitfire – Famous for its speed, agility, and elliptical wings, it became an icon of British air power."
    },
    {
        src: "messerchmitt109.jpg",
        caption: "Messerschmitt Bf 109 – Germany’s primary fighter aircraft, known for its powerful engine and high performance."
    }
];

let currentIndex = 0;

const imgElement = document.getElementById("slider-img");
const captionElement = document.getElementById("caption");

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
}
