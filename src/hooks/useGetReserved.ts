import { D_RESERVED } from '@/const/dev'
import { Reserved } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

function useGetReserved() {
    const isProduct = process.env.NODE_ENV === "production"
    const [reserved, setReserved] = useState<Reserved[]>()

    useEffect(() => {
        if (isProduct) {
            axios.get("/api/get-reserved.php").then((res: AxiosResponse<Reserved[]>) => {
                setReserved(res.data)
            })
        } else setReserved(D_RESERVED)
    }, [])

    return reserved
}


export default useGetReserved