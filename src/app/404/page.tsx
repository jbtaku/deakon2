import Headline from '@/components/Headline'
import SectionInnerBox from '@/components/SectionInnerBox'
import React from 'react'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='ページが見つかりません' titleEn='404 not found' breadcrumbs={[]} />
            <SectionInnerBox className='max-w-[700px]'>
                <p>お探しのページは見つかりません</p>
            </SectionInnerBox>
        </div>
    )
}

export default page