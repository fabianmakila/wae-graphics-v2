const div = document.getElementById("text");
const wrapper = document.getElementById("textWrapper");
const texts = [
  "WAEverything",
  "discord.gg/wae"
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let index = 1;

async function nextText() {
  if (div === null || wrapper === null) return;

  wrapper.style.opacity = "0";

  await sleep(1000);

  const oldWidth = div.scrollWidth;
  div.textContent = texts[index];
  if (index >= texts.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }

  let transition = div.style.transition;
  div.style.transition = "";
  div.style.width = null;

  requestAnimationFrame(function() {
    let newWidth = div.scrollWidth;
    div.style.width = oldWidth + 'px';
    div.style.transition = transition;


    requestAnimationFrame(function() {
      div.style.width = newWidth + "px";
    });
  });

  await sleep(2000);

  wrapper.style.opacity = "1";
}

setInterval(nextText, 30000);

