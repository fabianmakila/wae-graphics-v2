import { NodeCGBrowser, ReplicantBrowser } from "nodecg/types/browser";
import { ToastsReplicant } from "../../types/schemas";

// NodeCG
const toastsReplicant: ReplicantBrowser<ToastsReplicant> =
  nodecg.Replicant("toasts");

const inputs = document.querySelectorAll("input");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e: any) {
    const data = {
      leftToast: {
        title: inputs[0].value,
        subtitle: inputs[1].value,
      },
      rightToast: {
        title: inputs[2].value,
        subtitle: inputs[3].value,
      },
      bottomToast: inputs[4].value.split(";"),
      show: e.target.dataset.show,
    };

    toastsReplicant.value = data;
  });
});

toastsReplicant.on("change", (newValue: ToastsReplicant) => {
  // Left
  inputs[0].value = newValue.leftToast.title || "";
  inputs[1].value = newValue.leftToast.subtitle || "";

  // Right
  inputs[2].value = newValue.rightToast.title || "";
  inputs[3].value = newValue.rightToast.subtitle || "";

  // Bottom
  const bottomToastItems = newValue.bottomToast;
  if (bottomToastItems != null) {
    inputs[4].value = bottomToastItems.join(";");
  }
});
