
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


/* Start of the rotate image function */

/* Initialize the rotateImage function and setup the images to be used */
function setupImages() {
    // Images to be displayed
    const developerImages = ["images/videoGame.png", "images/foliumMaps.png"];
    const qcImages = ["images/burnDownChart.png", "images/InsForm.png"];
    const fabImages = ["images/chandelier.JPG", "images/stairsSketchUp.JPEG"];

    // Initialize the rotateImage function
    rotateImage("Developer", developerImages);
    rotateImage("QCM", qcImages);
    rotateImage("fab", fabImages);
}

/* Create an interactive image rotation display */
function rotateImage(imageId, imageArray) {
    let index = 0; // Ensure each instance manages its own index independently

    setInterval(() => {
        const imageElement = document.getElementById(imageId);

        // Remove active class for fade-out
        imageElement.classList.remove("active");

        setTimeout(() => {
            // Update the image source
            index = (index + 1) % imageArray.length; // Loop through images
            imageElement.src = imageArray[index];

            // Add active class for fade-in
            imageElement.classList.add("active");
        }, 800); // Match the CSS transition duration
    }, 3000); // Rotation interval
}

// Initialize the function
setupImages();
/* End of the rotate image function */


