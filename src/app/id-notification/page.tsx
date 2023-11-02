import Headline from '@/components/Headline'
import { idNotification } from '@/const/nav'
import React from 'react'
import IdNotification from './components/IdNotification'
import SectionInnerBox from '@/components/SectionInnerBox'

function page() {
    return (
        <div>
            <Headline img='/images/party/image.jpg' title='IDの通知' titleEn='ID NOTIFICATION' breadcrumbs={[idNotification]} />
            <SectionInnerBox className='max-w-[700px]'>
                <IdNotification />
            </SectionInnerBox>
        </div>
    )
}

export default page