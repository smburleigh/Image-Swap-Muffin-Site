let lastClickedImageSrc; 

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the variable after the DOM is fully loaded
    lastClickedImageSrc = document.querySelector('.mainImage img').src;
});

function changeImage(clickedImage) {
   
    var mainImage = document.querySelector('.mainImage img');

    // Set the main image's source file to the last clicked image's
    mainImage.src = lastClickedImageSrc;

    // Update the lastClickedImageSrc to the source of the currently clicked image
    lastClickedImageSrc = clickedImage.src;
}
