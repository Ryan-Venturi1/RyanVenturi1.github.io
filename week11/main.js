const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const IMAGE_FILENAMES = ['Pic1.jpg', 'Pic2.jpg', 'Pic3.jpg', 'Pic4.jpg', 'Pic5.jpg'];
let currentIndex = 0;

// Function to create thumbnail images
function createThumbnails() {
    IMAGE_FILENAMES.forEach(filename => {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', filename); // Update the image path here
        newImage.setAttribute('alt', 'Image');
        thumbBar.appendChild(newImage);

        // Add click event listener to each thumbnail
        newImage.addEventListener('click', function() {
            currentIndex = IMAGE_FILENAMES.indexOf(filename);
            updateDisplayedImage();
        });
    });
}

// Function to update displayed image based on currentIndex
function updateDisplayedImage() {
    const currentImage = IMAGE_FILENAMES[currentIndex];
    displayedImage.setAttribute('src', currentImage); // Update the image path here
    displayedImage.setAttribute('alt', 'Image');

    // Update the overlay background to show the selected image
    overlay.style.backgroundImage = `url(${currentImage})`; // Update the image path here
    overlay.style.backgroundSize = 'cover';
    overlay.style.backgroundPosition = 'center';
}

// Event listener for the darken/lighten button
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});

// Call the function to create thumbnails
createThumbnails();