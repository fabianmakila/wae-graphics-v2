import { h } from "preact";

function TextInput(props) {
    return <input value={props.value} onInput={props.onInput} class={`rounded w-full p-2 bg-light border-white outline-sky-600 outline-2 focus:outline focus:bg-dark ${props.cname}`} type="text" placeholder={props.placeholder} />;
}

export default TextInput;