import { h } from "preact";

function ButtonGroupButton(props) {
    return <button class="block grow bg-sky-600 p-2 hover:bg-sky-400">{props.name}</button>
}

export default ButtonGroupButton;