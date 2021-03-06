import React, { useState } from 'react'

const StatefullComponent = () => {

    const [value, setValue] = useState(0)
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={() => setValue(value + 1)}>Increase</button>
        </div>
    )
}

export default StatefullComponent
