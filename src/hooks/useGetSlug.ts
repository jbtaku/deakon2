import React, { useEffect, useState } from 'react'

function useGetSlug() {
    const [slug, setSlug] = useState<string | undefined>()
    useEffect(() => {
        const path = location.pathname
        const tmp = path.slice(-1) === "/" ? path.slice(0, -1) : path
        const slugList = tmp.split("/")

        setSlug(slugList.pop() as string)
    }, [])

    return slug
}

export default useGetSlug