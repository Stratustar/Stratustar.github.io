# Hengdong Lu Personal Website

Static personal website for GitHub Pages.

## Files

- `index.html`: main personal page
- `photography.html`: photography gallery page
- `styles.css`: site styling
- `script.js`: gallery fallback and browser-generated music sketch
- `assets/profile.png`: hero/background image
- `assets/gallery/`: web-sized photography images with metadata stripped

## GitHub Pages

Create a repository named `YOUR_GITHUB_USERNAME.github.io`, push these files to the `main` branch, and GitHub Pages will publish the site at:

```text
https://YOUR_GITHUB_USERNAME.github.io
```

For a normal repository name, enable Pages from `Settings -> Pages` and publish from the `main` branch root.

## Future Images

Photography source files can be added under:

```text
assets/photography/
```

Then generate web-sized copies under `assets/gallery/` and add matching
`<figure>` entries in `photography.html`. The current page uses the generated
gallery images so the public site stays reasonably light.

The watch photo can be added under:

```text
assets/watch/
```

Then replace the placeholder in `index.html`.

Keyboard source photos can be added under:

```text
assets/keyboard/
```

Then generate web-sized copies named `keyboard-01.jpg` and `keyboard-02.jpg`.

The original CV and original profile photo are ignored so they are not accidentally published.
