"use client"

import axios from 'axios'
import React, { useState } from 'react'

type Props = { userId: string, password: string }

function useAuth(props: Props): string {
    const [errorMessage, setErrorMessage] = useState("")

    axios.post("/api/login.php", props).then((res) => {
        localStorage.setItem("id", res.data.id)
        localStorage.setItem("token", res.data.token)
        
        //response が例外として帰ってこないので取り合えず代替のロジックで凌ぐここから
        Object.keys(res.data).length === 1 ? setErrorMessage(res.data.message) : window.location.href = "https://deakon.jp/mypage.html"
    }).catch((res) => {
        setErrorMessage(res.data.message)
    })
    
    return errorMessage
}

export default useAuth