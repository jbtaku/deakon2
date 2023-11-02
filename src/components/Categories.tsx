"use client"

import { Category, ClassName } from '@/types'
import React from 'react'
import CategoryCard from './CategoryCard'
import SectionInnerBox from './SectionInnerBox'
import useGetCategories from '@/hooks/useGetCategories'
import Loader from './Loader'

type Props = ClassName

function Categories({ className }: Props) {

    const categories: Category[] | undefined = useGetCategories()



    return (
        <SectionInnerBox>
            {categories ?
                <ul className={className}>
                    {categories?.map((item) => {
                        return (
                            <li key={item.title}>
                                <CategoryCard {...item} />
                            </li>
                        )
                    })}
                </ul> : <Loader />}
        </SectionInnerBox>
    )
}

export default Categories