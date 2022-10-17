import { h, render, Component, Fragment } from "preact";
import Control from "../components/control/control";
import ControlGroup from "../components/control/control-group";
import Button from "../components/button/button";
import ControlTitle from "../components/control/control-title";
import TextInput from "../components/ui/text-input";

class App extends Component {
  render() {
    return (
      <ControlGroup>
        <Control>
          <div class="grid grid-cols-schedule gap-2">
            <ControlTitle title="Time" />
            <ControlTitle title="Program" />

            <TextInput placeholder="00:00" />
            <TextInput placeholder="Ohjelmaa" />
          </div>
        </Control>
        <Control>
          <Button name="Update" />
        </Control>
      </ControlGroup>
    );
  }
}

render(<App />, document.getElementById("app")!);
