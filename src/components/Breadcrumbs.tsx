import { Navigation } from '@/types'
import React from 'react'

type Props = { navItems: Navigation[] }

function Breadcrumbs({ navItems }: Props) {
    return (
        <nav className='pl-3 sm:pl-4 md:pl-6 2md:pl-8 py-1 bg-red-100'>
            <ul className='flex'>
                <li className='text-red-500 hover:opacity-60'><a href="/">TOP</a></li>
                {navItems.map((item) => {
                    return (
                        <li key={item.title} className='flex mx-2'>
                            <img className='mr-2 w-2' src="/images/common/arrow_1.svg" alt="矢印" />
                            <a className='hover:opacity-60' href={item.link}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumbs