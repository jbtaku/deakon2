import { CategoryTitleSlug } from '@/types'
import React, { useEffect, useState } from 'react'
import useGetCategories from './useGetCategories'

function useGetCategoryTitleSlug() {
    const [categoryTitleSlug, setCategoryTitleSlug] = useState<CategoryTitleSlug[]>([])
    const categories = useGetCategories()

    useEffect(() => {
        if (categories) {
            const tmp: CategoryTitleSlug[] = categories.map((item) => {
                return { categoryTitle: item.title, categorySlug: item.slug }
            })
            setCategoryTitleSlug(tmp)
        }
    }, [categories])
    return categoryTitleSlug
}

export default useGetCategoryTitleSlug