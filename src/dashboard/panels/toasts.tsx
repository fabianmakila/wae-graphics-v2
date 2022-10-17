import { h, render, Component, Fragment } from "preact";
import ControlGroup from "../components/control/control-group";
import ButtonGroupButton from "../components/button/button-group-button";
import ButtonGroup from "../components/button/button-group";
import ControlTitle from "../components/control/control-title";
import TextInput from "../components/ui/text-input";
import Button from "../components/button/button";
import Control from "../components/control/control";
import { signal } from "@preact/signals";

class App extends Component {
  render() {
    const leftToast = signal({
      icon: "",
      title: "",
      subtitle: ""
    });

    const rightToast = signal({
      icon: "",
      title: "",
      subtitle: ""
    });

    const bottomToast = signal({
      content: ""
    });

    function showLeft() {

    }

    function showRight() {

    }

    function showBoth() {

    }

    function showBottom() {

    }

    return (
      <ControlGroup>
        <div class="flex gap-4">
          <Control cname="flex w-full flex-col gap-2">
            <ControlTitle title="Left toast" />
            <div class="flex gap-2">
              <TextInput value={leftToast.value.icon} cname="w-16" placeholder="icon" />
              <TextInput value={leftToast.value.title} placeholder="Title" />
            </div>

            <TextInput value={leftToast.value.subtitle} placeholder="Subtitle" />
          </Control>

          <Control cname="flex w-full flex-col gap-2">
            <ControlTitle title="Right toast" />
            <div class="flex gap-2">
              <TextInput value={rightToast.value.icon} cname="w-16" placeholder="icon" />
              <TextInput value={rightToast.value.title} placeholder="Title" />
            </div>

            <TextInput value={rightToast.value.subtitle} placeholder="Subtitle" />
          </Control>
        </div>
        <ButtonGroup>
          <ButtonGroupButton onClick={showLeft} name="Show left" />
          <ButtonGroupButton onClick={showBoth} name="Show both" />
          <ButtonGroupButton onClick={showRight} name="Show right" />
        </ButtonGroup>
        <Control>
          <ControlTitle title="Bottom toast" />
          <div class="flex gap-2">
            <TextInput value={bottomToast.value.content} placeholder="Insert buckazoid" />
            <Button onClick={showBottom} name="Show bottom" />
          </div>
        </Control>
      </ControlGroup>
    );
  }
}

render(<App />, document.getElementById("app")!);
