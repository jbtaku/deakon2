"use client"

import { ClassName } from '@/types'
import React, { useEffect, useState } from 'react'

type Props = ClassName

function Logout({ className }: Props) {

    const [isLogout, setIsLogout] = useState(false)

    useEffect(() => {
        if (isLogout) {
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            window.location.href = "/"
        }
    }, [isLogout])

    const handleLogout = () => {
        setIsLogout(true)
    }

    return (
        <button className={className + ' w-[210px] rounded-3xl text-center text-white py-2 bg-red-400 hover:bg-opacity-80'}
            onClick={handleLogout}>ログアウト</button>
    )
}

export default Logout