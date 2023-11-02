"use client"

import { Children } from '@/types'
import React, { useState } from 'react'

type Props = Children

function MobaileHeader({children} : Props) {
    const [open, setOpne] = useState(false)
    const openModal = () => {
        setOpne((prevState) => !prevState)
    }

    return (
        <div className='absolute top-4 right-0 lg:hidden'>
            <button className='group peer [&>span]:block [&>span]:absolute [&>span]:w-10 [&>span]:-left-11 mt-6 [&>span]:h-1 [&>span]:bg-black
                ml-auto mr-5 [&>span]:duration-500 relative'
                aria-expanded={open} onClick={openModal}>
                <span className='-top-[13px] group-aria-expanded:rotate-[225deg] group-aria-expanded:top-0' />
                <span className='group-aria-expanded:opacity-0 group-aria-expanded:rotate-[180deg]' />
                <span className='top-[13px] group-aria-expanded:rotate-[315deg] group-aria-expanded:top-0' />
            </button>
            <div className='bg-gradient-to-l from-[#fb5758] to-[#fc906e] overflow-scroll
            w-0 min-h-screen fixed top-0 right-0 -z-10 pt-28 peer-aria-expanded:pl-16 peer-aria-expanded:w-full duration-500 delay-150'>
                {children}
            </div>
        </div>
    )
}

export default MobaileHeader