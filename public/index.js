const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const thumbContainer = document.querySelector(".thumbContainer");
const thumbImages = thumbContainer.querySelectorAll("img");
const imageDisplay = document.querySelector(".imageDisplay");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

thumbImages.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    imageDisplay.src = images[index];
  });

  // thumbImages.forEach((img, i) => {
  //   img.classList.remove("selected");
  //   if (i === index) {
  //     img.classList.add("selected");
  //   }
  // });
});
let currentImageIndex = 0;
function displayImages(index) {
  if (index >= 0) {
    imageDisplay.src = images[index];

  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImages(currentImageIndex);
}

next.addEventListener("click", nextImage);

close.addEventListener("click", closeModal);
