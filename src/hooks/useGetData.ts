import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {
    apiPath: string
    devData: any
}

function useGetData({apiPath, devData}: Props) {
    const [data, setData] = useState<any[]>()
    useEffect(()=>{
        process.env.NODE_ENV === "production" ? (
            axios.get(apiPath).then((res)=>{
                setData(res.data)
            }).catch((e)=>{
                console.log(e)
            })
        ): setData(devData)
    },[])

    return (data)
}

export default useGetData