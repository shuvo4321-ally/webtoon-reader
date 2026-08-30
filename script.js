document.addEventListener('DOMContentLoaded', () => {
    const readerContainer = document.getElementById('reader-container');
    const header = document.getElementById('header');
    const placeholder = document.getElementById('placeholder');

    // Hide header on scroll down for immersive reading, show on scroll up
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

    // Fetch images automatically from our static JSON file
    fetch('comics.json')
        .then(response => response.json())
        .then(images => {
            if (images.error) {
                placeholder.innerHTML = `<p style="color: #ff3366;">Error loading images. Ensure the folder exists.</p>`;
                return;
            }

            if (images.length === 0) {
                placeholder.innerHTML = `<p>No images found in the folder.</p>`;
                return;
            }

            // Clear placeholder
            readerContainer.innerHTML = '';

            // Read and display images
            images.forEach(imageName => {
                const img = document.createElement('img');
                img.src = `comics/${encodeURIComponent(imageName)}`;
                img.alt = imageName;
                img.loading = 'lazy';
                readerContainer.appendChild(img);
            });
        })
        .catch(err => {
            console.error('Error fetching images:', err);
            placeholder.innerHTML = `<p style="color: #ff3366;">Failed to connect to the local server.</p>`;
        });
});
