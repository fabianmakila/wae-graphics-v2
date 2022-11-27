import { NodeCGBrowser } from "nodecg/types/browser";

const toastReplicant = nodecg.Replicant("toasts");
const inputs = document.querySelectorAll("input");

interface SideToastData {
  icon?: string,
  title: string,
  subtitle: string
}

interface ToastReplicant {
  left: SideToastData
  right: SideToastData
  bottom: string
  show: string
}

let data: ToastReplicant;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", function (e:any) {
    data = {
      left: {
        icon: undefined,
        title: inputs[0].value,
        subtitle: inputs[1].value
      },
      right: {
        icon: undefined,
        title: inputs[2].value,
        subtitle: inputs[3].value
      },
      bottom: inputs[4].value,
      show: e.target.dataset.show
    }

    toastReplicant.value = data;
  })
})

toastReplicant.on('change', (newValue:any) => {
  inputs[0].value = newValue.left.title;
  inputs[1].value = newValue.left.subtitle;

  inputs[2].value = newValue.right.title;
  inputs[3].value = newValue.right.subtitle;

  inputs[4].value = newValue.bottom;
});
