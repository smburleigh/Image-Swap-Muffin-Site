
/**
*  Image Swapping Function
* @param {clickedImage}
* @returns {mainImage}
* @example
* 
*/
function changeImage(clickedImage) {
   //Grabbing image data and setting it to the thumbnail

    let mainImage = document.getElementById("mainImage"); //selecting the main image
    mainImage.src = clickedImage.src; //setting the main image to the thumbnail
}
