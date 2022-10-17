import { h } from "preact";

function ControlGroup(props) {
    return <div class={`flex flex-col gap-2 ${props.cname}`}>{props.children}</div>;
}

export default ControlGroup;