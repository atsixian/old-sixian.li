import mediumZoom from "medium-zoom";

// This file is adapted from the plugin https://github.com/JaeYeopHan/gatsby-remark-images-medium-zoom
// It doesn't work with MDX files, so I manually added all selectors for external images

// @see https://github.com/francoischalifour/medium-zoom#options
const defaultOptions = {
  margin: 24,
  background: "#fff",
  scrollOffset: 40,
  container: null,
  template: null,
  zIndex: 999,
  excludedSelector: null,
  includedSelector: `[src$='.png'], [src$='.gif'], [src$='#gimg']` // Add your choices here
};

// @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-images/src/constants.js#L1
const imageClass = ".gatsby-resp-image-image";

const ZOOM_STYLE_ID = "medium-zoom-styles";
const TRANSITION_EFFECT = "opacity 0.5s, transform .3s cubic-bezier(.2,0,.2,1)";

function injectStyles(options) {
  const styleTag = document.querySelector(`#${ZOOM_STYLE_ID}`);
  if (styleTag) {
    return;
  }

  const { zIndex } = options;
  const node = document.createElement("style");
  const styles = `
    .medium-zoom--opened > .medium-zoom-overlay,
    .medium-zoom--opened > .medium-zoom-image,
	  img.medium-zoom-image--opened {
      z-index: ${zIndex}
    }
  `;
  node.id = ZOOM_STYLE_ID;
  node.innerHTML = styles;
  document.head.appendChild(node);
}

function applyZoomEffect({ excludedSelector, includedSelector, ...options }) {
  const imagesSelector = excludedSelector
    ? `${imageClass}:not(${excludedSelector})`
    : imageClass;
  let imageElements = Array.from(document.querySelectorAll(imagesSelector));
  if (includedSelector) {
    const includedEls = Array.from(document.querySelectorAll(includedSelector));
    imageElements = imageElements.concat(includedEls);
  }
  const images = imageElements.map(el => {
    function onImageLoad() {
      const originalTransition = el.style.transition;

      el.style.transition = `${originalTransition}, ${TRANSITION_EFFECT}`;
      el.removeEventListener("load", onImageLoad);
    }
    el.addEventListener("load", onImageLoad);
    el.setAttribute("tabIndex", 0);
    el.addEventListener("keydown", e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        el.click();
      }
    });
    return el;
  });

  if (images.length > 0) {
    mediumZoom(images, options);
  }
}

export const onRouteUpdate = _ => {
  const options = { ...defaultOptions };
  injectStyles(options);

  applyZoomEffect(options);
};
