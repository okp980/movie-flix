import React, { useState } from 'react'

function Button({ name }) {
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(prevState => !prevState)
    }
    return <button onClick={handleClick} className={click ? 'btn' : 'btn dark'}>{name}</button>

}
export default Button
