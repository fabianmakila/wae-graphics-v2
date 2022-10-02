import { NodeCGBrowser } from "nodecg/types/browser";

const toastReplicant = nodecg.Replicant("toasts");
const form = <HTMLFormElement>document.getElementById("form");
const manualInput = <HTMLFormElement>document.getElementById("isManual");

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateToastReplicant);
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", function (e) {
        nodecg.sendMessage("showToast", e.target.dataset.show)
    })
})

function updateToastReplicant() {
  const data = Object.fromEntries(new FormData(form).entries());
  toastReplicant.value = data;
}

toastReplicant.on('change', (newValue) => {
    if (newValue === undefined) {
        return;
    }
    for (const [key, value] of Object.entries(newValue)) {
        if (key === "isManual") continue;
        const input = <HTMLInputElement>document.getElementById(key);
        if (input === null) {
            continue;
        }
        input.value = value;
    }

    // Update isManual checkbox
    if (manualInput !== null) {
        manualInput.checked = (newValue.isManual);
    }
});