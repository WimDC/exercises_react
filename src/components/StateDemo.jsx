import { useState } from "react"

export const StateDemo = () => {
    const [demoValue, setDemoValue] = useState(0)
    return(
        <div>
            <div>
                de waarde van de demoValue is {demoValue}
                de waarde van de demoValue is {demoValue}
            </div>
            <div>
                <button onClick={() => setDemoValue(77)}>set 77</button>
                <button onClick={() => setDemoValue(0)}>set 0</button>
                <button onClick={() => setDemoValue(184)}>set 184</button>
            </div>
        </div>
    )
}