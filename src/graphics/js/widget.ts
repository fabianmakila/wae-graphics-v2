// HTML Elements
const text = document.getElementById("text")!;
const textWrapper = document.getElementById("textWrapper")!;

const texts = [
  "WAEverything",
  "discord.gg/wae"
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let index = 1;

async function nextText() {
  textWrapper.style.opacity = "0";

  await sleep(1000);

  const oldWidth = text.scrollWidth;
  text.textContent = texts[index];
  if (index >= texts.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }

  let transition = text.style.transition;
  text.style.transition = "";
  text.style.width = null;

  requestAnimationFrame(function() {
    let newWidth = text.scrollWidth;
    text.style.width = oldWidth + 'px';
    text.style.transition = transition;


    requestAnimationFrame(function() {
      text.style.width = newWidth + "px";
    });
  });

  await sleep(2000);

  textWrapper.style.opacity = "1";
}

setInterval(nextText, 30000);


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
