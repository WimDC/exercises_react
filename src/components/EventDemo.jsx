import { Alert } from "@mui/material"

export const EventDemo = () => {
    const message = () => { alert("button is clicked")};
    return (
        <button onClick={message}>click me please!</button>
    )
}