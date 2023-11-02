import { Category, ClassName } from '@/types'
import React from 'react'

type Props = Category & ClassName

function CategoryCard({ img, title, className, slug }: Props) {
    return (
        <a href={"/categorized-events.html?cat=" + slug} >
            <div className={className + " group pt-3 pb-[6px] rounded-md shadow-xl shadow-red-100 bg-white hover:bg-gradient-to-r from-[#fb5758] to-[#fc906e]"}>
                <img className='rounded-md mb-2 w-[90%] h-auto aspect-[145/87] object-cover mx-auto' src={img} alt={title} />
                <p className='text-[#fb5758] group-hover:text-white text-xl font-semibold text-center'>{title}</p>
            </div>
        </a>
    )
}

export default CategoryCard