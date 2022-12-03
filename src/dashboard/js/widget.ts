const scheduleReplicant = nodecg.Replicant("widget");
const textArea = document.getElementById("texts")! as HTMLTextAreaElement;
const updateButton = document.getElementById("updateButton")!;

updateButton?.addEventListener("click", () => {
  const texts = textArea.value.split("\n");
  scheduleReplicant.value = texts;
});

scheduleReplicant.on("change", (newValue) => {
  if (newValue == undefined) {
    return;
  }

  textArea.value = newValue.join("\n");
});
