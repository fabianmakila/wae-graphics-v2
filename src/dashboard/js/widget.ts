import { WidgetReplicant } from "../../types/schemas";

// NodeCG
const widgetReplicant =
  nodecg.Replicant<WidgetReplicant>("widget");

const textArea = document.getElementById("texts")! as HTMLTextAreaElement;
const updateButton = document.getElementById("updateButton")!;

updateButton.addEventListener("click", () => {
  const texts = textArea.value.split("\n");
  widgetReplicant.value = texts;
});

widgetReplicant.on("change", (newValue) => {
  if (newValue == undefined) {
    return;
  }

  textArea.value = newValue.join("\n");
});
