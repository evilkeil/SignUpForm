const images = [
    {src: 'images/leo-maverick-Vb5xjkLaFXQ-unsplash.jpg', credit: 'Leo Maverick'},
    {src: 'images/marek-piwnicki-9celAnrs-BU-unsplash.jpg', credit: 'Marek Piwnicki'},
    {src: 'images/sahil-moosa-q5O9V6yZFuk-unsplash.jpg', credit: 'Sahil Moosa'},
    {src: 'images/tharoushan-kandarajah-KtDXt7DyfVM-unsplash.jpg', credit: 'Tharoushan Kandarajah'}
];

const imageContainer = document.querySelector('.image-container');
const creditTag = document.querySelector('.credit');

let index = 0;

function updateImage() {
    const {src, credit} = images[index];
    const duration = 16; // duration of the animation in seconds
    imageContainer.style.transition = `background-image ${duration}s ease-in-out`;
    creditTag.style.transition = `opacity ${duration}s ease-in-out`;

    imageContainer.style.backgroundImage = `url(${src})`;
    creditTag.innerHTML = `Photo by ${credit}`;

    index = (index + 1) % images.length;
}

updateImage();
setInterval(updateImage, 4000);