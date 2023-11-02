import { D_CATEGORIES } from '@/const/dev'
import { Category } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

function useGetCategories() {
    const isProduct = process.env.NODE_ENV === "production"
    const [categories, setCategories] = useState<Category[]>()

    useEffect(() => {
        if (isProduct) {
            axios.get("/api/get-categories.php").then((res) => {
                setCategories(res.data)
            })
        } else setCategories(D_CATEGORIES)
    }, [])
    return categories
}

export default useGetCategories