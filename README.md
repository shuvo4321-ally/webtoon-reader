# Webtoon Reader

A minimal, distraction-free reader for vertical-scroll comics (webtoons). Pages are stacked in one long scroll, and the header hides while you read downward and reappears when you scroll up.

## How it works

`build.js` scans a `comics/` folder for images (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`), sorts them naturally (1, 2, 10), and writes `comics.json`. The page loads that list and renders the images in order.

## Usage

1. Put your page images in a `comics/` folder next to `index.html`.
2. Generate the image list:
   ```bash
   node build.js
   ```
3. Serve the folder with any static server and open it:
   ```bash
   npx serve .
   ```

## Files

| File | Role |
|---|---|
| `index.html`, `styles.css`, `script.js` | The reader UI |
| `build.js` | Generates `comics.json` from `comics/` |
| `comics.json` | The current image list |

## Notes

The `comics/` folder is not part of this repository. `package.json` also references a `server.js` that is not committed, so use a static server as shown above.