import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'
import axios from 'axios'
import { Favorite } from '@/types'

function useGetFavoriteList() {
    const [id, token] = useLocalStorage()
    const [favorite, setFavorite] = useState<Favorite>()

    useEffect(() => {
        if (id) {
            axios.post("/api/get-favorite-list.php", { "id": id }).then((res) => {
                setFavorite(res.data)
            })
        }
    }, [id])
    return favorite
}

export default useGetFavoriteList