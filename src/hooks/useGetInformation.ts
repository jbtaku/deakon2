import { D_NEWS } from '@/const/dev'
import { NewsType } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

function useGetInformation() {
    const isProduct = process.env.NODE_ENV === "production"
    const [informations, setInformations] = useState<NewsType[]>()

    useEffect(() => {
        if (isProduct) {
            axios.get("/api/get-information.php").then((res) => {
                setInformations(res.data)
            })
        } else setInformations(D_NEWS)
    }, [])

    return informations
}


export default useGetInformation