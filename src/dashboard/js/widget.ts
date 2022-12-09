import { WidgetReplicant } from "../../types/schemas";
import { NodeCGBrowser, ReplicantBrowser } from "nodecg/types/browser";

// NodeCG
const widgetReplicant: ReplicantBrowser<WidgetReplicant> =
  nodecg.Replicant("widget");

const textArea = document.getElementById("texts")! as HTMLTextAreaElement;
const updateButton = document.getElementById("updateButton")!;

updateButton.addEventListener("click", () => {
  const texts = textArea.value.split("\n");
  widgetReplicant.value = texts;
});

widgetReplicant.on("change", (newValue: WidgetReplicant) => {
  if (newValue == undefined) {
    return;
  }

  textArea.value = newValue.join("\n");
});
