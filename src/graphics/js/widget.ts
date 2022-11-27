// HTML Elements
const text = document.getElementById("text")!;
const textWrapper = document.getElementById("textWrapper")!;

// URL params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const interval = 60000;

switch (urlParams.get("position")) {
  case "topleft":
    break;
  case "bottomleft":
    document.body.style.alignItems = "end";
    break;
  case "bottomright":
    document.body.style.alignItems = "end";
    document.body.style.justifyContent = "right";
    break;
  default:
    document.body.style.justifyContent = "right";
}

const collapseEnabled = !urlParams.has("nocollapse");
let textWidth;

// Temporary texts shown on widget
// Will be moved to panel where they can be user configured
const texts = [
  "WAEverything",
  "discord.gg/wae"
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let textIndex = 0;

async function collapseRoutine() {
  swapNextText();

  const contentWidth = text.scrollWidth;
  text.style.width = contentWidth + "px";
  textWrapper.style.paddingInline = "1rem";

  showText();

  await sleep(10000);

  // Collapse
  hideText();
  text.style.width = "0px";
  textWrapper.style.paddingInline = "0rem";
}

function swapNextText() {
  // Swap text
  text.textContent = texts[textIndex];
  if (textIndex >= texts.length - 1) {
    textIndex = 0;
  } else {
    textIndex = textIndex + 1;
  }
}

async function nonCollapseRoutine() {
  hideText();

  await sleep(2000);

  // Store the current width before swapping text
  const currentWidth = text.scrollWidth;

  swapNextText();

  // Remove transition temporally so we can get the new width
  const transition = text.style.transition;
  text.style.transition = "";
  text.style.width = null;
  // Grab the new width
  const newWidth = text.scrollWidth;

  requestAnimationFrame(function() {
    // Apply old things back
    text.style.width = currentWidth + 'px';
    text.style.transition = transition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to the new width
    requestAnimationFrame(function() {
      text.style.width = newWidth + 'px';
    });
  });

  showText();
}

function showText() {
  text.style.opacity = "1";
}

function hideText() {
  text.style.opacity = "0";
}

if (collapseEnabled) {
  textWrapper.style.transition = "padding 2s";
  text.style.width = "0px";
  textWrapper.style.paddingInline = "0rem";

  setInterval(collapseRoutine, interval);
} else {
  swapNextText();
  textWrapper.style.paddingInline = "1rem";
  showText();

  setInterval(nonCollapseRoutine, interval);
}
