import React from 'react'
import { Flow } from '../flow'

type Props = Flow

function FlowBox({ order, title, content, img }: Props) {
    return (
        <div className='rounded-xl bg-white shadow-2xl shadow-red-300 w-[92%] p-4 md:p-6 my-10 mx-auto'>
            <div className='bg-red-400 rounded-xl py-1 px-4 mb-4 w-max '>
                <p className='text-white font-semibold'>{order}</p>
            </div>
            <p className='text-xl font-bold my-2'>{title}</p>
            <p className='my-4'>{content}</p>
            <img src={img} alt={order} />
        </div>
    )
}

export default FlowBox