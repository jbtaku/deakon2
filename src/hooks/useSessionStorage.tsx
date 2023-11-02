"use client"

import { useEffect, useState } from 'react'

function useSessionStorage(): (string | null)[] {
    const [id, setId] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        setId(sessionStorage.getItem("id"))
        setToken(sessionStorage.getItem("token"))
    }, [])
    return [id, token]
}
export default useSessionStorage