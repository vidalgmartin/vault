'use client'

import { useState } from "react"

export default function Login() {
    const [number, setNumber] = useState(0)

    const numGoUp = () => {
        setNumber(number + 1)
    }

    return (
        <div >
            {number}
            <button onClick={numGoUp}> Click Me</button>
        </div>
    )
}