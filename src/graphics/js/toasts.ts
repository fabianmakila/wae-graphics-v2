import { NodeCGBrowser } from "nodecg/types/browser";

const toastReplicant = nodecg.Replicant("toasts");

const bottomToast = document.getElementById("bottom");
const leftToast = document.getElementById("left");
const rightToast = document.getElementById("right");

const leftToastDivs = leftToast?.getElementsByTagName("div");
const rightToastDivs = rightToast?.getElementsByTagName("div");

function updateToastContent(data:any) {
  if (data === undefined) return;
  leftToastDivs[1].textContent = data.left.title;
  leftToastDivs[2].textContent = data.left.subtitle;

  rightToastDivs[1].textContent = data.right.title;
  rightToastDivs[2].textContent = data.right.subtitle;

  if (bottomToast !== null) {
    bottomToast.innerHTML = "";
  }

  data.bottom.split(";").forEach(entry => {
    let div = document.createElement("div");
    div.textContent = entry;
    bottomToast?.appendChild(div);
  })

  switch (data.show) {
    case "left":
      showToast(leftToast);
      break;
    case "right":
      showToast(rightToast);
      break;
      case "both":
        showToast(leftToast);
        showToast(rightToast);
        break;
      case "bottom":
        showToast(bottomToast);
        break;
  }
}

toastReplicant.on("change", (newValue) => {
  updateToastContent(newValue);
});

function showToast(toast: HTMLElement | null) {
  if (toast === null) return;

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 10000);
}
