import { NodeCGBrowser } from "nodecg/types/browser";

const scheduleReplicant = nodecg.Replicant("schedule");
const button = document.getElementById("updateButton");
const inputPairs = getInputPairs();

button?.addEventListener("click", updateSchedule);

function updateSchedule() {
    const scheduleEntries = [];
    for (let pair of inputPairs) {
        scheduleEntries.push([pair[0].value, pair[1].value])
    }

  scheduleReplicant.value = scheduleEntries;
}

function getInputPairs() {
    const inputs = [...document.querySelectorAll("input")];
    const pairs = inputs.reduce(function (result, value, index, array) {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2));
        }

        return result;
      }, []);
    return pairs;
}

scheduleReplicant.on('change', (newValue: any) => {
    for (let index = 0; index < newValue.length; index++) {
        const inputPair = inputPairs[index];
        const entry = newValue[index];
        inputPair[0].value = entry[0];
        inputPair[1].value = entry[1];
    }
});
