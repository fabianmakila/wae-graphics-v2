import { h } from "preact";

function Button(props) {
    return <button onClick={props.onClick} class="block bg-sky-600 whitespace-nowrap p-2 rounded hover:bg-sky-400">{props.name}</button>
}

export default Button;