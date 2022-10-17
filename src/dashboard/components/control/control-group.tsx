import { h } from "preact";

function ControlGroup(props) {
    return <div class="flex flex-col gap-4">{props.children}</div>;
}

export default ControlGroup;