// HTML Elements
const text = document.getElementById("text")!;
//const textWrapper = document.getElementById("textWrapper")!;

const texts = [
  "WAEverything",
  "discord.gg/wae"
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let index = 0;

async function nextText() {
  expand();
  await sleep(10000);
  collapse();
}

async function expand() {
  // Update text
  text.textContent = texts[index];
  if (index >= texts.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }

  // Apply new width
  const contentWidth = text.scrollWidth;
  text.style.width = `calc(${contentWidth + "px"} + 1rem)`;
  text.style.opacity = "1";
}

function collapse() {
  text.style.opacity = "0";
  text.style.width = "0px";
}

setInterval(nextText, 15000);


// URL params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

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
