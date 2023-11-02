import { Children, ClassName } from '@/types'
import React from 'react'

type Props = ClassName & Children

function SectionInnerBox({className, children}: Props) {
    return (
        <div className={className + ' max-w-[1200px] mx-auto'}>
            {children}
        </div>
    )
}

export default SectionInnerBox