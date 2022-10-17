import { h, render, Component } from "preact";

class App extends Component {
    constructor() {
        super();
        // set initial time:
        this.state = { time: Date.now()}
    }

    componentDidMount(): void {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now()});
        }, 1000);
    }

    componentWillMount(): void {
        // stop when not renderable
        clearInterval(this.timer);
    }

  render(_props, state) {
    let time = new Date(state.time).toLocaleTimeString("sw-SE");
    return <div class="grid place-items-center h-full font-bold text-6xl">{ time }</div>
  }
}

render(<App />, document.getElementById("app")!);
