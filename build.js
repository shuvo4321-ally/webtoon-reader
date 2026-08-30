const fs = require('fs');
const path = require('path');

const COMICS_DIR = path.join(__dirname, 'comics');

if (!fs.existsSync(COMICS_DIR)) {
    console.error('comics directory not found! Please ensure you have a folder named "comics" with your images.');
    process.exit(1);
}

const files = fs.readdirSync(COMICS_DIR);

const images = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
});

// Sort naturally so 1, 2, 10 are in order
images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

fs.writeFileSync(path.join(__dirname, 'comics.json'), JSON.stringify(images, null, 2));
console.log(`Successfully generated comics.json with ${images.length} images.`);
