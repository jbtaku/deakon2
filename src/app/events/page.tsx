import Headline from '@/components/Headline'
import Parties from '@/components/Parties'
import SectionInnerBox from '@/components/SectionInnerBox'
import { partyList } from '@/const/nav'
import React from 'react'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='パーティー一覧' titleEn='PARTY LIST' breadcrumbs={[partyList]} />
            <SectionInnerBox className='max-w-[1000px]'>
                <Parties startDate='1980-01-01'/>
            </SectionInnerBox>
        </div>
    )
}

export default page