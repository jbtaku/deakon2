"use client"

import { useEffect, useLayoutEffect, useState } from 'react'

function useLocalStorage(): (string | null)[] {
    const [id, setId] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useLayoutEffect(() => {
        setId(localStorage.getItem("id"))
        setToken(localStorage.getItem("token"))
    }, [])

    return [id, token]
}
export default useLocalStorage