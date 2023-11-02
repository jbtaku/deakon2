"use client"

import { ClassName } from '@/types'
import React, { useState } from 'react'

type Props = {
    onClick?: () => void
    initState?: number
} & ClassName

function Star({ onClick, initState, className }: Props) {

    const [fill, setFill] = useState(initState === 1 ? "#ff9492": "white")

    const handleOnClick = () => {
        setFill((prevState) => prevState === "white" ? "#ff9492" : "white")
    }

    return (
        <button className={className + " block w-max"} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200" width="45" height="40" onClick={handleOnClick}>
                <polygon stroke='#fb5758' stroke-width="10" fill={fill} points="0,-100 29.39,-40.45 95.11,-30.9 47.55,15.45 58.78,80.90 0,50 -58.78,80.9 -47.55,15.45 -95.11,-30.9 -29.39,-40.45" />
            </svg>
        </button>
    )
}

export default Star