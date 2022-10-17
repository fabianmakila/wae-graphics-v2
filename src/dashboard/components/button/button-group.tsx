import { h } from "preact";

function ButtonGroup(props) {
    return (
        <div class="flex rounded gap-1 overflow-hidden">
            {props.children}
        </div>
    )
}

export default ButtonGroup;