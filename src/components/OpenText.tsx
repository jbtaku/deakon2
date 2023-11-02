"use client"

import { ClassName } from '@/types'
import React, { useState } from 'react'

type Props = {
    buttonContent: string
    textContent: string
    buttonClass?: string
    textClass?: string
    dangerous?: boolean
} & ClassName

function OpenText({ buttonContent, textContent, className, buttonClass, textClass, dangerous }: Props) {
    const [toggle, setToggle] = useState(false)
    const onClick = () => {
        setToggle((prevState) => !prevState)
    }
    const textStyle = " h-0 aria-hidden:h-max scale-y-0 aria-hidden:scale-y-100 origin-top duration-500"

    return (
        <div className={className}>
            <button onClick={onClick} className={buttonClass}>{buttonContent}</button>
            {dangerous ? <p aria-hidden={toggle} className={textClass + textStyle} dangerouslySetInnerHTML={{ __html: textContent }}></p> :
            <p aria-hidden={toggle} className={textClass + textStyle}>{textContent}</p>}
        </div >
    )
}

export default OpenText